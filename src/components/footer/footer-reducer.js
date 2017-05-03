import {
  LOADING_FOOTER,
  LOADING_FOOTER_SUCCEEDED,
  LOADING_FOOTER_FAILED,
} from './footer-actions.js';

const initialState = {
  navLinks: [],
};

function footerReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case LOADING_FOOTER: {
    state = { ...state, ...payload };
    break;
  }
  case LOADING_FOOTER_SUCCEEDED: {
    state = { ...state, ...payload };
    break;
  }
  case LOADING_FOOTER_FAILED: {
    state = { ...state, ...payload };
    break;
  }
  }
  return state;
}

export default footerReducer;
