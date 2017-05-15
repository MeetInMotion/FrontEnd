/*export default function (state = { isConnected: null }, action) {
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
  case '':
  default:
    return state;
  }
}
*/

import {
  LOADING_LOGINSTATUS,
  LOADING_LOGINSTATUS_SUCCEEDED,
  LOADING_LOGINSTATUS_FAILED,
} from './login-actions.js';

const initialState = {
  loading: false,
  isError: false,
  isConnected: null,
};

function loginReducer(state = initialState, action) {
  const { type, ...rest} = action;

  switch (type) {
  case LOADING_LOGINSTATUS: {
    state = { ...state, ...rest };
    break;
  }

  case LOADING_LOGINSTATUS_SUCCEEDED: {
    state = { ...state, ...rest };
    break;
  }

  case LOADING_LOGINSTATUS_FAILED: {
    state = { ...state, ...rest };
    break;
  }
  }

  return state;
}

export default loginReducer;
