const express = require('express');
var socket = require('socket.io');

// express app setup
const app = express();
const server = app.listen(4000, () => {
  console.log('server is listerning to port 4000');
});

// socket setup
var io = socket(server);

io.on('connection', function(socket) {
  console.log('made socket connection on connection method', socket.id);

  socket.on('chat', function(data) {
    // send to all clients which are connected to this web socket

    // io.sockets = has all the individual sockets which are connected to clients
    // example: if there are 5 browsers connected, we get 5 different sockets in it

    // data which we received by one client is sent to all other clients
    io.sockets.emit('chat', data);
  });
});
