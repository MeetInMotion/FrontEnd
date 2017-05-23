import {
  LOADING_LOCATIONS,
  LOADING_LOCATIONS_SUCCEEDED,
  LOADING_LOCATIONS_FAILED,
} from './location-actions.js';

const initialState = {
  loading: false,
  isError: false,
  locationsList: [],
};

function locationReducer(state = initialState, action) {
  const {type, ...rest} = action;

  switch (type) {
  case LOADING_LOCATIONS: {
    state = {...state, ...rest};
    break;
  }

  case LOADING_LOCATIONS_SUCCEEDED: {
    state = {...state, ...rest};
    break;
  }

  case LOADING_LOCATIONS_FAILED: {
    state = {...state, ...rest};
    break;
  }
  }

  return state;
}

export default locationReducer;