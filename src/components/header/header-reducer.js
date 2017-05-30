import { LOADING_PAGE } from '../page-actions.js';
import {
  LOADING_FB_SDK,
  LOADING_FB_SDK_SUCCESS,
} from './header-actions';
const initialState = {
  headerTitle: 'Meet in Motion',
  fb_sdk_loaded: false,
  loading_fb_sdk: false,
};
function headerReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
  case LOADING_PAGE: {
    state = { ...state, headerTitle: action.pageName };
    break;
  }
  case LOADING_FB_SDK: {
    return {
      ...state,
      loading_fb_sdk: true,
      fb_sdk_loaded: false,
    };
  }
  case LOADING_FB_SDK_SUCCESS: {
    return {
      ...state,
      loading_fb_sdk: false,
      fb_sdk_loaded: true,
    };
  }
  }
  return state;
}

export default headerReducer;
