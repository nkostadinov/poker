import io from 'socket.io-client';

var socket = io(window.location.href)
socket.on('news', (data) => {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
