module.exports = (orm, db) => {
  db.define('thumbup', {
    total: {type: 'integer', defaultValue: 1, required: true}
  })
}