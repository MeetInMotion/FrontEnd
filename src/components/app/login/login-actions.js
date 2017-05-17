/*
 This Facebook React Redux login code is from:
      Liran Cohen and his repostory is:  github.com:iliran11/facebook-login-redux-react.git
*/

export function getUserLoginStatus(status) {
  return { type: 'loginResponse', payload: status };
}

export function getUserData() {
  return { type: 'getData' };
}

export function getUserInformation(userInformation) {
  return { type: 'getUserInformation', payload: userInformation };
}
