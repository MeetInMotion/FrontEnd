import {
  LOADING_LOCATION,
  LOADING_LOCATION_SUCCEEDED,
  LOADING_LOCATION_FAILED,
  CLEARING_EVENTS,
} from './single-event-actions.js';

const initialState = {
  loading: false,
  isError: false,
  eventLocation: {coordinates: {east: null,north: null}},
  eventList: [],
};

function singleEventReducer(state = initialState, action) {
  const {type, ...rest} = action;

  switch (type) {
  case LOADING_LOCATION: {
    state = {...state, ...rest};
    break;
  }

  case LOADING_LOCATION_SUCCEEDED: {
    state = {...state, ...rest};
    break;
  }

  case LOADING_LOCATION_FAILED: {
    state = {...state, ...rest};
    break;
  }

  case CLEARING_EVENTS: {
    state = {...state, ...rest};
    break;
  }  

  }

  return state;
}

export default singleEventReducer;