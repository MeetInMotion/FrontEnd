import {
  LOADING_CATEGORIES,
  LOADING_CATEGORIES_SUCCEEDED,
  LOADING_CATEGORIES_FAILED,
} from './category-actions.js';

const initialState = {
  loading: false,
  isError: false,
  categoriesList: [],
};

function categoryReducer(state = initialState, action) {
  const { type, ...rest} = action;

  switch (type) {
  case LOADING_CATEGORIES: {
    state = { ...state, ...rest };
    break;
  }

  case LOADING_CATEGORIES_SUCCEEDED: {
    state = { ...state, ...rest };
    break;
  }

  case LOADING_CATEGORIES_FAILED: {
    state = { ...state, ...rest };
    break;
  }
  }

  return state;
}

export default categoryReducer;
