var express = require('express')
var app = express()
var colors = require('colors')
var config = require('./config/settings')
var environment = require('./config/environment')
var routers = require('./config/router')

environment(app)
routers(app)

app.listen(config.port, () => {
  console.log(`Server listesning on port ${config.port}`.green)
})