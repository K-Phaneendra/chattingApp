const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SOCKET_CHAT': {
      console.log('in reducer', action.payload);
      break;
    }
    default:
      return state;
  }
  return state;
};
