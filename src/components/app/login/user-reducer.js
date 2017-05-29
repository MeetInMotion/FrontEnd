import {AUTHENTICATING_USER, AUTHENTICATING_USER_SUCCESS} from "./login-actions";
const initialState = {
  id: null,
  name: null,
  email: null,
};

export default function userReducer(state = initialState , action) {
  switch (action.type) {
  case AUTHENTICATING_USER:
    return {...state, ...action.payload};
  case AUTHENTICATING_USER_SUCCESS:
    return {...state, ...action.payload};
  default:
    return state;
  }
}
