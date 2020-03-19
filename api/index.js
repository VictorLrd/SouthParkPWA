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

var db = mongoose.connection
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'))
db.once('open', function() {
  console.log('Bien connecté à Atlas !')
})

// var userSchema = mongoose.Schema({
//   username: String,

// })

// var User = mongoose.model('User', userSchema)

var matchSchema = mongoose.Schema({
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

app
  .route('/match')
  .get(function(req, res) {
    Match.find(function(err, matchs) {
      if (err) {
        res.send(err)
      }
      res.json(matchs)
    })
  })
  .post(function(req, res) {})

app.post('/loadDataMatches', async function(req, res, next) {
  axios
    .get(
      'https://apiv2.apifootball.com/?action=get_events&from=2019-08-01&to=2020-06-30&league_id=176&APIkey=d84b7147d44deeb606597c8f4b3c07a5d9447d17f6d1bf9040928aa09d7aa2b5'
    )
    .then(response => {
      response.data.forEach(async m => {
        var match = new Match()
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
