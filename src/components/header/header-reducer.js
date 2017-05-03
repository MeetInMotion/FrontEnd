import { LOADING_PAGE } from '../app/page-actions.js';

const initialState = {
  headerTitle: 'Meet in Motion',
};
function headerReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
  case LOADING_PAGE: {
    state = { ...state, headerTitle: action.pageName };
    break;
  }
  }
  return state;
}

export default headerReducer;
