
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

export function authenticateUser(access_token) {
  
  return function(dispatch) {
    dispatch(authenticatingUser());
    fetch("http://api.localhost:8081/authenticate?access_token="
      + access_token)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        dispatch(authenticatingUserSuccess(json.user));
        localStorage.setItem('token', json.token);
        
      });   
  };
}

export const SIGNING_USER_OUT = "SIGNING_USER_OUT";
export function signingUserOut(){
  return {
    type: SIGNING_USER_OUT,
  };
}

export const SIGNING_USER_OUT_SUCCESS = "SIGNING_USER_OUT_SUCCESS";
export function signingUserOutSuccess(){
  return {
    type: SIGNING_USER_OUT_SUCCESS,
  };
}

export function signUserOut(){
  return function(dispatch){
    dispatch(signingUserOut());
    localStorage.removeItem('token');
    dispatch(signingUserOutSuccess());
  };
}
