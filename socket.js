const gameData = require('./routes/gameData')
var sharedsession = require("express-socket.io-session")
const session = require('./routes/session')

module.exports = function (io) {
  gameData.io = io

  io
    .use(sharedsession(session, { autoSave: true }))
    .on('connection', (socket) => {
      // console.log(socket.handshake.session.user)
      socket.emit('games', gameData.getGamedata());
    });
}
