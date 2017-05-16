/*
 This Facebook React Redux login code is from:
      Liran Cohen and his repostory is:  github.com:iliran11/facebook-login-redux-react.git
*/

export default function (state = null, action) {
  switch (action.type) {
  case 'getUserInformation':
    return (action.payload);
  default:
    return state;
  }
}
