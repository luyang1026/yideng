var express = require('express')
var app = express()
var colors = require('colors')
var config = require('./config/settings')

app.get('/', (req, res) => {
  res.send('hello')
})
app.listen(config.port, () => {
  console.log(`Server listesning on port ${config.port}`.green)
})