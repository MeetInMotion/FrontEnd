import {
  LOADING_EVENTS,
  LOADING_EVENTS_SUCCEEDED,
  LOADING_EVENTS_FAILED,
} from './event-actions.js';

const initialState = {
  loading: false,
  isError: false,
  events: [],
};

function eventReducer(state = initialState, action) {
  const {type, ...rest} = action;

  switch (type) {
  case LOADING_EVENTS: {
    state = {...state, ...rest};
    break;
  }

  case LOADING_EVENTS_SUCCEEDED: {
    state = {...state, ...rest};
    break;
  }

  case LOADING_EVENTS_FAILED: {
    state = {...state, ...rest};
    break;
  }
  }

  return state;
}

export default eventReducer;