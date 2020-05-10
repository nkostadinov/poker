var session = require('express-session')
var FileStore = require('session-file-store')(session);

module.exports = session({
  secret: 'VSFDGRSVFS',
  store: new FileStore(),
  resave: true,
  saveUninitialized: true,
})