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

app.use(bodyParser.json({ limit: '50mb', extended: true }))

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(multerStorage.single('file'))

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

var mongoose = require('mongoose')

var urlmongo =
  'mongodb+srv://pwa:Sr12xb2KMYQZA3VM@cluster0-d73ir.mongodb.net/southparkpwa?retryWrites=true&w=majority'

mongoose.connect(urlmongo, { useNewUrlParser: true, useUnifiedTopology: true })

const Schema = require('mongoose')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'))
db.once('open', function() {
  console.log('Bien connecté à Atlas !')
})

var userSchema = mongoose.Schema({
  _group: { type: Schema.Types.ObjectId, ref: 'Group' },
  username: String,
  email: String,
  password: String,
  favoriteTeam: String,
  matchs: Array,
  totalPoint: Number
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
  isFinished: Boolean,
  point: Number
})

var Match = mongoose.model('Match', matchSchema)

app
  .route('/match/:userId')
  .get(async function(req, res) {
    console.log(req.params.userId)
    if (req.params && req.params.userId) {
      const matchs = await User.findById(req.params.userId)
        .select('matchs')
        .exec()
      res.send(matchs)
    } else {
      res.send("Pas d'utilisateur")
    }
  })
  .post(async function(req, res) {
    if (req.params && req.params.userId && req.body.matchs) {
      await User.updateOne(
        { _id: req.params.userId },
        {
          matchs: req.body.matchs
        }
      ).exec()
      const matchsUpdate = await User.findById(req.params.userId)
        .select('matchs')
        .exec()
      res.send({ matchs: matchsUpdate })
    } else {
      res.send("Pas d'utilisateur")
    }
  })

app.route('/register').post(async function(req, res, next) {
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
    user.totalPoint = 0
    const hash = await bcrypt.hash(req.body.password, 10)
    user.password = hash
    let group = null
    if (req.body.group !== null || req.body.group !== '') {
      group = await Group.findOne({ code: req.body.group })
        .select('name')
        .exec()
      if (!group) {
        return next({
          status: 404,
          message: "Il n'y a pas de groupe qui correspond à ce code"
        })
      }
      user._group = group._id
    }
    const matchs = []
    await axios
      .get(
        'https://apiv2.apifootball.com/?action=get_events&from=2019-08-01&to=2020-06-30&league_id=176&APIkey=d84b7147d44deeb606597c8f4b3c07a5d9447d17f6d1bf9040928aa09d7aa2b5'
      )
      .then(response => {
        response.data.forEach(async m => {
          const match = {}
          match.idApi = m.match_id
          match.dom = m.match_hometeam_name
          match.scoreFinalHom = m.match_hometeam_score
          match.logoDom = m.team_home_badge
          match.scoreDomUser = null
          match.coteDom = 10
          match.ext = m.match_awayteam_name
          match.logoExt = m.team_away_badge
          match.scoreFinalExt = m.match_awayteam_score
          match.scoreExtUser = null
          match.coteExt = 15
          match.coteNull = 5
          match.journee = m.match_round
          match.date = new Date()
          match.isFinished = m.match_status === 'Finished'
          match.point = -1
          matchs.push(match)
        })
      })
      .catch(function(error) {
        console.log(error)
      })
      .then(function() {
        user.matchs = matchs
        user.save()
        let users = group._users && group._users.length ? group._users : []
        users.push(String(user._id))
        group._users = users
        group.save()
        res.send({ user: user._id })
      })
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
  if (req.body && req.body.password && req.body.username) {
    const user = await User.findOne({ username: req.body.username }).exec()
    if (user) {
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
        message: "Pas d'utilisateur avec ce username"
      })
    }
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
    Group.find(function(err, groups) {
      if (err) {
        res.send(err)
      }
      res.json(groups)
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

app.route('/groupScore/:userId').get(async function(req, res) {
  if (req.params && req.params.userId) {
    const user = await User.findById(req.params.userId)
      .select('_group')
      .exec()
    if (user && user._group) {
      const usersClassment = await Group.findById(user._group)
        .select('_users')
        .populate({
          path: '_users',
          select: 'totalPoint username',
          options: { sort: { totalPoint: -1 } }
        })
        .exec()
      console.log(usersClassment)
      res.send({ classment: usersClassment._users })
    }
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

app.get('/calculatePointUser', async function(req, res, next) {
  calculatePointUser()
  res.send('ok')
})

const calculatePointUser = async () => {
  const users = await User.find()
    .select('matchs totalPoint')
    .exec()
  if (users) {
    users.forEach(async user => {
      let totalPointUser = 0
      await user.matchs.forEach(match => {
        match.point =
          match.scoreDomUser == null ||
          match.scoreExtUser == null ||
          match.scoreFinalHom == '' ||
          match.scoreFinalExt == ''
            ? null
            : match.scoreFinalHom === match.scoreDomUser &&
              match.scoreExtUser === match.scoreFinalExt
            ? 20
            : match.scoreFinalHom > match.scoreFinalExt
            ? 10
            : 15
        totalPointUser += match.point ? match.point : 0
      })
      user.totalPoint = totalPointUser
      await user.save()
    })
  }
}

app.listen(3456, function() {
  console.log('Example app listening on port 3456!')
})
