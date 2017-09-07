var models = require('../app/models')
var colors = require('colors')

models((err,db) => {
  if(err) throw err
  db.drop(err => {
    if (err) throw err
    db.close()
    console.log('Done!'.green)
  })
})
