var controllers = require('../app/controllers/')
module.exports = app => {
  app.all('/thumbup', controllers.thumbup)
}
