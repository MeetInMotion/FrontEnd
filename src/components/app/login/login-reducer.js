import {AUTHENTICATING_USER_SUCCESS} from "./login-actions";

const initialState = {
  redirect: false,
};

export default function loginReducer(state = initialState, action){
  switch (action.type){
  case AUTHENTICATING_USER_SUCCESS: {
    return {
      ...state,
      redirect: true,
    };
  }  
  default:{
    return state;
  }
  }
}
