import io from 'socket.io-client';

// making connection
const socket = io('http://localhost:4000');

// emiting data to nodejs
export const sendMessage = chatObject => {
  socket.emit('chat', chatObject);
};
