module.exports = (req, res, next) => {
  const tu = req.models.thumbup
  tu.find({}, (err, row) => {
    if (err) return next(err)
    if (!row.length) {
      tu.create({}, (err, result) => {
        if (err) return next(err)
        res.render('index', {total: result.total})
      })
    } else {
      res.render('index', {total: row[0].total})
    }
  })
}
