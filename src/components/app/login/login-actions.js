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

export function fetchAccessToken(status){
  return {type: 'accessToken', payload: status};
}

export function failUserloginStatus(error){
  return {type: 'failLogin', error: error};
}

export function getAccessToken(status) {
  var access_token = status;
  return function(dispatch) {
    dispatch(getUserLoginStatus(status));
    fetch("http://api.localhost:8081/authenticate?access_token=" + access_token)
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      console.log("here i am");
      dispatch(getUserInformation(json.user));
      localStorage.setItem('token', json.token);
      dispatch(fetchAccessToken(json));
    });
    let isError = false;
    if(isError){
      dispatch(failUserloginStatus('error message'));
    }
  };
}
