// import io from 'socket.io-client';
// import { socketChat } from '../actions/socketActions';

// // making connection
// const socket = io('http://localhost:4000');

// // emiting data to nodejs
// export const sendMessage = chatObject => {
//   socket.emit('chat', chatObject);
// };

// // listern for events
// export const receivedFromSocket = () =>
//   new Promise(resolve =>
//     socket.on('chat', data => {
//       console.log('socket data', data);
//       resolve(data);
//     }));

// socket.on('chat', data => {
//   console.log('socket data to redu', data);
//   socketChat(data);
// });
