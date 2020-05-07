// const configureAPI = require('../configure')

module.exports = {
  devServer: {
    // before: (app, server) => {
    //   configureAPI(app)
    //   const io = require('socket.io').listen(server);
    //   require('../socket')(io)
    // },
    writeToDisk: true,
  },

  css: {
    extract: false
  }
}