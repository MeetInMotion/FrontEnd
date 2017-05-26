export const LOADING_EVENTS = 'LOADING_EVENTS';
function loadingEvents() {
  return {
    type: LOADING_EVENTS,
    loading: true,
  };
}

export const LOADING_EVENTS_SUCCEEDED = 'LOADING_EVENTS_SUCCEEDED';
function loadingEventsSucceeded(eventsList) {
  return {
    type: LOADING_EVENTS_SUCCEEDED,
    eventsList: eventsList,
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

export function loadEvents() {
  return function(dispatch) {

    dispatch(loadingEvents());

    fetch("http://api.localhost:8081/events")
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