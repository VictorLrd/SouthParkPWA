const express = require('express')
const multer = require('multer')
var bodyParser = require('body-parser')
var cors = require('cors')
const axios = require('axios')

const path = require('path')
const app = express()
app.use(cors())

const multerStorage = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024 // Limité à 2 Mo
  }
})
app.use(bodyParser.json())

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multerStorage.single('file'))

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

var mongoose = require('mongoose')

var urlmongo =
  'mongodb+srv://pwa:Sr12xb2KMYQZA3VM@cluster0-d73ir.mongodb.net/southparkpwa?retryWrites=true&w=majority'

mongoose.connect(urlmongo)

const Schema = require('mongoose')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'))
db.once('open', function() {
  console.log('Bien connecté à Atlas !')
})

var userSchema = mongoose.Schema({
  _groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
  username: String,
  email: String,
  password: String,
  favoriteTeam: String
})

var User = mongoose.model('User', userSchema)

var groupSchema = mongoose.Schema({
  _users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  name: String,
  code: String,
  mise: String
})

var Group = mongoose.model('Group', groupSchema)

var matchSchema = mongoose.Schema({
  idApi: String,
  dom: String,
  logoDom: String,
  scoreDom: Number,
  coteDom: Number,
  ext: String,
  logoExt: String,
  scoreExt: Number,
  coteExt: Number,
  coteNull: Number,
  journee: String,
  date: Date,
  isFinished: Boolean
})

var Match = mongoose.model('Match', matchSchema)

app.route('/match').get(function(req, res) {
  Match.find(function(err, matchs) {
    if (err) {
      res.send(err)
    }
    res.json(matchs)
  })
})

app.route('/inscription').post(async function(req, res, next) {
  const bcrypt = require('bcrypt')
  if (
    req.body &&
    req.body.username &&
    req.body.password &&
    req.body.email &&
    req.body.favoriteTeam
  ) {
    const user = new User()
    user.username = req.body.username
    user.email = req.body.email
    user.favoriteTeam = req.body.favoriteTeam
    const hash = await bcrypt.hash(req.body.password, 10)
    user.password = hash
    let group = null
    if (req.body.group !== null || req.body.group !== null) {
      group = Group.find({ code: req.body.group })
        .select('_users')
        .exec()
      if (!group) {
        return next({
          status: 404,
          message: "Il n'y a pas de groupe qui correspond à ce code"
        })
      }
      user.group = group._id
    }
    user.save()
  } else {
    return next({
      status: 404,
      message:
        'Il manque des informations pour pouvoir inscrire cet utilisateur.'
    })
  }
})

app.route('/login').post(async function(req, res, next) {
  const bcrypt = require('bcrypt')
  if (req.body && req.body.password && req.body.email) {
    const user = User.find({ email: req.body.email }).exec()
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) {
      return next({
        status: 400,
        message: 'Erreur de mot de passe'
      })
    }
    res.send({ id: user._id })
  } else {
    return next({
      status: 400,
      message: 'Il faut un email et un mot de passe'
    })
  }
})

app
  .route('/user/:id')
  .get(function(req, res, next) {
    if (req.params && req.params.id) {
      User.findById(req.params.id, function(err, user) {
        if (err) {
          res.send(err)
        }
        res.json(user)
      })
    } else {
      return next({
        status: 400,
        message: "Il faut l'id de l'user"
      })
    }
  })
  .post(function(req, res, next) {
    if (req.params && req.params.id && req.body) {
      User.updateOne({ _id: req.params.id }, req.body, function(err, user) {
        if (err) {
          res.send(err)
        }
        res.json(user)
      })
    } else {
      return next({
        status: 400,
        message: "Il manque l'id ou des infos pour modifier le user"
      })
    }
  })

app
  .route('/group')
  .get(function(req, res) {
    Match.find(function(err, matchs) {
      if (err) {
        res.send(err)
      }
      res.json(matchs)
    })
  })
  .post(function(req, res, next) {
    if (req.body && req.body.name) {
      const group = new Group()
      group.name = req.body.name
      group.code = Math.random()
        .toString(36)
        .substring(7)
      group.save()
    } else {
      return next({
        status: 400,
        message: 'Il manque le nom du groupe'
      })
    }
  })

app.post('/loadDataMatches', async function(req, res, next) {
  axios
    .get(
      'https://apiv2.apifootball.com/?action=get_events&from=2019-08-01&to=2020-06-30&league_id=176&APIkey=d84b7147d44deeb606597c8f4b3c07a5d9447d17f6d1bf9040928aa09d7aa2b5'
    )
    .then(response => {
      response.data.forEach(async m => {
        var match = new Match()
        match.idApi = m.match_id
        match.dom = m.match_hometeam_name
        match.logoDom = m.team_home_badge
        match.scoreDom = m.match_hometeam_score
        match.coteDom = 10
        match.ext = m.match_awayteam_name
        match.logoExt = m.team_away_badge
        match.scoreExt = m.match_awayteam_score
        match.coteExt = 15
        match.coteNull = 5
        match.journee = m.match_round
        match.date = new Date()
        match.isFinished = m.match_status === 'Finished'
        match.save(function() {})
      })
    })
    .catch(function(error) {
      console.log(error)
    })
    .then(function() {
      res.send('Bien enregistré !')
    })
})

app.listen(3456, function() {
  console.log('Example app listening on port 3456!')
})
