var orm = require('orm')
var settings = require('../../config/settings')
var connection = null

var setup = (db, cb) => {
  require('./thumbup')(orm,db)
  db.sync(() => {
    cb(null, db)
  })
}
module.exports = cb => {
  if (connection) return cb(null, connection)
  orm.connect(settings.database, (err, db) => {
    if (err) return cb(err)
    connection = db
    db.settings.set('instance.returnAllErrors', true)
    setup(db, cb)
  })
}