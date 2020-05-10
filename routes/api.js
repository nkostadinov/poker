var express = require('express');
var router = express.Router();
const gameData = require('../routes/gameData');

router.get('/user', (req, res, next) => {
  res.send(req.session.user)
})

router.post('/games/add', (req, res) => {
  const data = req.body
  const response = gameData.addGame({
    ...data,
    blind: 50,
    max_players: 8,
  }, req.session.user)
  res.send(response)
})

router.post('/games/join', (req, res) => {
  gameData.joinTable(req.body.name, req.session.user)
  res.send(gameData.getGamedata())
})

router.get('/start-game', (req, res) => {
  res.send(gameData.start())
})

router.get('/play', (req, res) => {
  res.send(gameData.play())
})

router.post('/connect', (req, res) => {
  const {Facebook, FacebookApiException} = require('fb')
  const fb = new Facebook({version: 'v2.4'})
  const token = req.body.authResponse.accessToken
  fb.setAccessToken(token)
  fb.api('me', { fields: 'id,name,email,picture', access_token: token }, (data) => {
    req.session.user = data
    res.send(data)
  });
})

module.exports = router