import {
  LOADING_BANNERS,
  LOADING_BANNERS_SUCCEEDED,
  LOADING_BANNERS_FAILED,
} from '../../actions/banners_actions/banners-actions.js';

const initialState = {
  loading: true,
  navLinks: [],
  headerTitle: 'Meet In Motion',
};
function banners(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case LOADING_BANNERS: {
    state = { ...state, loading: true };
    break;
  }
  case LOADING_BANNERS_SUCCEEDED: {
    state = { state, loading: false, ...payload };
    break;
  }
  case LOADING_BANNERS_FAILED: {
      // TODO redirect to error page
    state = { ...state };
    break;
  }
  }
  return state;
}

export default banners;
