module.exports = (orm, db) => {
  db.define('thumbup', {
    total: {type: 'integer', defaultValue: 0, required: true}
  })
}