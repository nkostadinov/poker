const bodyParser = require('body-parser')
const api = require('./routes/api')
const express = require("express");
// var cookieParser = require('cookie-parser');

module.exports = app => {
  app.use(require('./routes/session'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }));
  // app.use(cookieParser());

  app.use(bodyParser.json())
  app.use('/api', api)
  app.use('/register', api)
}