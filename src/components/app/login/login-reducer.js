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
