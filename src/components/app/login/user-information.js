/*
 This Facebook React Redux login code is from:
      Liran Cohen and his repostory is:  github.com:iliran11/facebook-login-redux-react.git
 */

const initialState = {
  id: null,
  name: null,
  email: null,
};

export default function (state = initialState , action) {
  switch (action.type) {
  case 'getUserInformation':
    return {...action.payload};
  default:
    return state;
  }
}
