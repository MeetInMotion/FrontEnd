export default function (state = { isConnected: null }, action) {
  switch (action.type) {
  case 'loginResponse':
    if (action.payload === 'connected') {
      return ({
        isConnected: true,
      });
    } else {
      return ({
        isConnected: false,
      });
    }
  case 'getData':
    return ({
      isConnected: state.isConnected,
    });
  default:
    return state;
  }
}
/*
export default function (state = { isConnected: null, isLoggedIn: null }, action) {
  switch (action.type) {
  case 'loginResponse':
    if (action.payload === 'connected') {
      return ({
        isConnected: true,
        isLoggedIn: false,
      });
    } else {
      return ({
        isConnected: false,
        isLoggedIn: false,
      });
    }
  case 'getData':
    return ({
      isConnected: state.isConnected,
      isLoggedIn: true,
    });
  default:
    return state;
  }
}
*/
