import {
  LOADING_LOCATION,
  LOADING_LOCATION_SUCCEEDED,
  LOADING_LOCATION_FAILED,
  LOADING_PARTICIPANTS_SUCCEEDED,
  LOADING_EVENT_SUCCEEDED,
  ATTENDING_STATUS_UPDATE,
  ATTEND_EVENT,
  CLEARING_EVENT,
  LOADING_EVENT,
} from './single-event-actions.js';

const initialState = {
  loading: false,
  isError: false,
  theEvent: {},
  eventLocation: {coordinates: {east: null,north: null}},
  participants: [],
  attending: null,
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

  case LOADING_PARTICIPANTS_SUCCEEDED: {
    state = {...state, ...rest};
    break;
  }

  case CLEARING_EVENT: {
    state = {...state, ...rest};
    break;
  }  

  case LOADING_EVENT: {
    state = {...state, ...rest};
    break;
  }  

  case LOADING_EVENT_SUCCEEDED: {
    state = {...state, ...rest};
    break;
  }

  case ATTENDING_STATUS_UPDATE: {
    state = {...state, ...rest};
    break;
  }

  case ATTEND_EVENT: {
    state = {...state, ...rest};
    break;
  } 

  }

  return state;
}

export default singleEventReducer;