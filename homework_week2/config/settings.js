var path = require('path')

var settings = {
  path: path.resolve('..'),
  port: process.env.NODE_PORT || 8000,
  database: {
    protocol: 'mysql',
    host: '127.0.0.1',
    database: 'yideng',
    user: 'root',
    password: 'root'
  }
}

module.exports = settings
