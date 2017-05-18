import {
  CREATING_EVENT,
  CREATING_EVENT_SUCCEEDED,
  CREATING_EVENT_FAILED,
} from './create-event-actions.js';

const initialState = {
  loading: false,
  isError: false,
};

function createEventReducer(state = initialState, action) {
  const {type, ...rest} = action;

  switch (type) {
  case CREATING_EVENT: {
    state = {...state, ...rest};
    break;
  }

  case CREATING_EVENT_SUCCEEDED: {
    state = {...state, ...rest};
    break;
  }

  case CREATING_EVENT_FAILED: {
    state = {...state, ...rest};
    break;
  }
  }

  return state;
}

export default createEventReducer;