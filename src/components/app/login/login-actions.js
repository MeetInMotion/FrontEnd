export const AUTHENTICATING_USER = "AUTHENTICATING_USER";
export function authenticatingUser(){
  return {
    type: AUTHENTICATING_USER,
    payload: {
      loading: true,
      authenticated: false,
    },
  };
}

export const AUTHENTICATING_USER_SUCCESS = "AUTHENTICATING_USER_SUCCESS";
export function authenticatingUserSuccess(user){
  return {
    type: AUTHENTICATING_USER_SUCCESS,
    payload: {
      loading: false,
      authenticated: true,
      ...user,
    },
  };
}

export function authenticateUser(fb_response) {
  return function(dispatch) {
    dispatch(authenticatingUser());
    fetch("http://api.localhost:8081/authenticate?access_token="
      + fb_response.authResponse.accessToken)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        dispatch(authenticatingUserSuccess(json.user));
        localStorage.setItem('token', json.token);
      });
  };
}
