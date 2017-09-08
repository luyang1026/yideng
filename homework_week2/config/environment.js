var path = require('path')
var express = require('express')
var settings = require('./settings')
var models = require('../app/models/')

module.exports = app => {
  app.set('views',path.join(settings.path, 'public'))
  app.set('view engine', 'pug')
  app.use(express.static(path.join(settings.path, 'public')))
  app.use((req, res, next) => {
    models((err,db) => {
      if (err) next(err)

      req.models = db.models
      req.db = db

      return next()
    })
  })
}
