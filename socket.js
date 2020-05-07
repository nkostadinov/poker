module.exports = function (io) {
  io
    .on('connection', (socket) => {
      console.log(socket.id);

      socket.emit('news', {hello: 'world'});
      socket.on('my other event', (data) => {
        console.log(data);
      });
    });
}
