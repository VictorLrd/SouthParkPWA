var express = require('express'),
  app = express()
app
  .use(express.static('./build'))
  .get('*', function(req, res) {
    res.sendfile('./build/index.html')
  })
  .listen(7890)
