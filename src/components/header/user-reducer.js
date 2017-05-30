import {
  AUTHENTICATING_USER_SUCCESS,
  SIGNING_USER_OUT_SUCCESS,
} from './user-actions';

const initialState = {
  id: null,
  name: null,
  email: null,
  authenticated: false,
};


export default function userReducer(state=initialState, action){
  const {type, payload } = action;
  switch (type){
  case SIGNING_USER_OUT_SUCCESS: {
    return {
      ...state,
      id: null,
      name: null,
      email: null,
      authenticated: false,
    };      
  }
  
  case AUTHENTICATING_USER_SUCCESS: {
    return {
      ...state,
      id: payload.id,
      name: payload.name,
      email: payload.email,
      authenticated: true,
    };
  }
  default: return state;
  }
}
