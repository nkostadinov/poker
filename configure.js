const bodyParser = require('body-parser')
const api = require('./routes/api')
const express = require("express");
// var cookieParser = require('cookie-parser');
var session = require('express-session')
var FileStore = require('session-file-store')(session);

module.exports = app => {
  app.use(session({
    secret: 'VSFDGRSVFS',
    store: new FileStore(),
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  // app.use(cookieParser());

  app.use(bodyParser.json())
  app.use('/api', api)
  app.use('/register', api)
}