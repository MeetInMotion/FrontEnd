export const LOADING_LOCATION = 'LOADING_LOCATION';
function loadingLocation() {
  return {
    type: LOADING_LOCATION,
    loading: true,
  };
}

export const LOADING_LOCATION_SUCCEEDED = 'LOADING_LOCATION_SUCCEEDED';
function loadingLocationSucceeded(eventLocation) {
  return {
    type: LOADING_LOCATION_SUCCEEDED,
    eventLocation: eventLocation,
    loading: true,
    isError: false,
  };
}

export const LOADING_LOCATION_FAILED = 'LOADING_LOCATION_FAILED';
function loadingLocationFailed(error) {
  return {
    type: LOADING_LOCATION_FAILED,
    isError: false,
    error: error,
  };
}

export const CLEARING_EVENTS = 'CLEARING_EVENTS';
function clearingEvents(emptyList) {
  return {
    type: CLEARING_EVENTS,
    loading: true,
    eventList: emptyList,
  };
}

// export const CLEARING_EVENTS_SUCCEEDED = 'CLEARING_EVENTS_SUCCEEDED';
// function clearingEventsSucceeded() {
//   return {
//     type: CLEARING_EVENTS_SUCCEEDED,
//     loading: true,
//     isError: false,
//   };
// }

// export const CLEARING_EVENTS_FAILED = 'CLEARING_EVENTS_FAILED';
// function clearingEventsFailed(error) {
//   return {
//     type: CLEARING_EVENTS_FAILED,
//     isError: false,
//     error: error,
//   };
// 

export function loadLocation(id) {
  return function(dispatch) {
    dispatch(loadingLocation());

    fetch("http://api.localhost:8081/locations/" + id)
      .then(function(response) {
        return response.json();
      }) 
      .then(function(json) {
        dispatch(loadingLocationSucceeded(json)); 
      });
    let isError = false;
    
    if (isError) {
      dispatch(loadingLocationFailed('error message'));
    }
  };
}

export function clearEvents() {
  return function(dispatch) {

    dispatch(clearingEvents([]));

    // check

  };
}

