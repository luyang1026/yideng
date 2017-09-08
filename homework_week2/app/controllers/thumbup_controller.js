module.exports = (req, res, next) => {
  const tu = req.models.thumbup
  tu.exists({}, (err, exist) => {
    if (err) return next(err)
    if (exist) {
      tu.find({},(err, item) => {
        item[0].total ++
        item[0].save(err => {
          if(err) return next(err)
          res.json(item[0])
        })
      })
    } else {
      tu.create({}, (err, result) => {
        if (err) return next(err)
        res.json(result)
      })
    }
  })
}