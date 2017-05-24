/*
 This Facebook React Redux login code is from:
      Liran Cohen and his repostory is:  github.com:iliran11/facebook-login-redux-react.git
*/

export default function (state = { isConnected: null, isWorking: null }, action) {

  switch (action.type) {
  case 'loginResponse':
    if (action.payload === 'connected') {
      return ({
        isConnected: true,
        isWorking: true,
      });
    } else {
      return ({
        isConnected: false,
        isWorking: false,
      });
    }
  case 'accessToken':
    return ({
      isConnected: true,
      isWorking: true,
    });
  case 'fetching':
    return ({
      isConnected: state.isConnected,
      isWorking: true,
    });
  default:
    return state;
  }
}
