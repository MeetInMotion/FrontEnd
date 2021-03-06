import config from '../../../../config/config';

export const LOADING_EVENTS = 'LOADING_EVENTS';
function loadingEvents() {
  return {
    type: LOADING_EVENTS,
    loading: true,
  };
}

export const LOADING_EVENTS_SUCCEEDED = 'LOADING_EVENTS_SUCCEEDED';
function loadingEventsSucceeded(events) {
  // events.map(
  //   (event) => (
  //     console.log(event.id)
  //   )
  // );
  console.log(events); //eslint-disable-line
  return {
    type: LOADING_EVENTS_SUCCEEDED,
    eventList: events,
    loading: true,
    isError: false,
  };
}

export const LOADING_EVENTS_FAILED = 'LOADING_EVENTS_FAILED';
function loadingEventsFailed(error) {
  return {
    type: LOADING_EVENTS_FAILED,
    isError: false,
    error: error,
  };
}

export const CLEARING_EVENTS = 'CLEARING_EVENTS';
function clearingEvents() {
  return {
    type: CLEARING_EVENTS,
    loading: false,
    isError: false,
    eventList: [],
  };
}

export function loadEvents(url){
  return function(dispatch){
    dispatch(loadingEvents());
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(loadingEventsSucceeded(json));
      });
  };
}

export function loadLocationEvents(id) {
  return function(dispatch) {    
    dispatch(loadingEvents());

    fetch(config.host + "/locations/" + id + "/events")
      .then(function(response) {
        return response.json();
      }) 
      .then(function(json) {
        dispatch(loadingEventsSucceeded(json)); 
      });
    
    let isError = false;

    if (isError) {
      dispatch(loadingEventsFailed('error message'));
    }
  };
}

export function clearEvents() {
  return function(dispatch) {
    dispatch(clearingEvents());

    // check

  };
}
