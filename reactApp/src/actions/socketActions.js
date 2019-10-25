import io from 'socket.io-client';

// making connection
const socket = io('http://localhost:4000');

// emiting data to nodejs
export const sendMessage = chatObject => {
  socket.emit('chat', chatObject);
};

// listern for events

// const socketChat = data => dispatch => {
//   console.log('in disp', data);
// };

socket.on('chat', data => dispatch =>
  dispatch({
    type: 'SOCKET_CHAT',
    payload: data
  }));
