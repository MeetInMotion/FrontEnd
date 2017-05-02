import { LOADING_PAGE } from '../../actions/page_actions/page-actions.js';

const initialState = {
  headerTitle: 'Meet in Motion',
};
function header(state = initialState, action) {
  const { type } = action;
  switch (type) {
  case LOADING_PAGE: {
    state = { ...state, headerTitle: action.pageName };
    break;
  }
  }
  return state;
}

export default header;
