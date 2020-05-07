const bodyParser = require('body-parser')
const api = require('./routes/api')

module.exports = app => {
  app.use(bodyParser.json())
  app.use('/api', api)
  app.use('/register', api)
}