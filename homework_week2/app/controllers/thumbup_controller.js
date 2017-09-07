module.exports = (req, res, next) => {
  const tu = req.models.thumbup
  tu.exists({}, (err, exist) => {
    if (err) return next(err)
    if (exist) {
      tu.find({},(err, item) => {
        console.log("%d", item.length)
        console.log(item)
      })
    } else {
      tu.create({}, (err, result) => {
        if (err) return next(err)
        res.json(result)
      })
    }
  })
}