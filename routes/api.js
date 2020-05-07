var express = require('express');
var router = express.Router();

// router.get('/', (req, res, next) => {
//   res.send(req.session)
// })

router.get('/user', (req, res, next) => {
  res.send(req.session.user)
})

router.post('/connect', (req, res) => {
  const {Facebook, FacebookApiException} = require('fb')
  const fb = new Facebook({version: 'v2.4'})
  const token = req.body.authResponse.accessToken
  fb.setAccessToken(token)
  fb.api('me', { fields: 'id,name,email,picture', access_token: token }, (data) => {
    req.session.user = data
    console.log('sess', data)
    res.send(data)
  });
})

module.exports = router