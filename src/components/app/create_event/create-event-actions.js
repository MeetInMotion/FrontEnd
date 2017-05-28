export const CREATING_EVENT = 'CREATING_EVENT';
function creatingEvent() {
  return {
    type: CREATING_EVENT,
    loading: true,
  };
}

export const CREATING_EVENT_SUCCEEDED = 'CREATING_EVENT_SUCCEEDED';
function creatingEventSucceeded() {
  return {
    type: CREATING_EVENT_SUCCEEDED,
    loading: true,
    isError: false,
    eventCreated: true,
  };
}

export const CREATING_EVENT_FAILED = 'CREATING_EVENT_FAILED';
function creatingEventFailed(error) {
  return {
    type: CREATING_EVENT_FAILED,
    isError: false,
    error: error,
  };
}

export const ESLINT_SUCKS = 'ESLINT_SUCKS';
function fuckYouEsLint(values, locationId, userId) {
  return {
    type: ESLINT_SUCKS,
    values: values,
    locationId: locationId,
    userId: userId,
  };
}

export function createEvent(values, locationId, userId, time) {

  return function(dispatch) {
    dispatch(creatingEvent());
    dispatch(creatingEventSucceeded());

    dispatch(fuckYouEsLint(values, locationId, userId, time));


    const eventData = 
      {
        "title": values.title,
        "datetime": time,
        "user_id": 1,
        "description": values.description,
        "location_id": locationId,
      };
    
    fetch('http://api.localhost:8081/events', 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify( eventDATA ),
      }
    )
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log(json); //eslint-disable-line
    });
    
    let isError = false;

    if (isError) {
      dispatch(creatingEventFailed('creating event failed'));
    }
  };
}