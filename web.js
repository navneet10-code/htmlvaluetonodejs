var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.post('/login', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send('welcome, ' + req.body.username)
})
