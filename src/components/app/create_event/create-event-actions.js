export const CREATING_EVENT = 'CREATING_EVENT';
function creatingEvent() {
  return {
    type: CREATING_EVENT,
    loading: true,
  };
}

export const CREATING_EVENT_SUCCEEDED = 'CREATING_EVENT_SUCCEEDED';
function creatingEventSucceeded(newEvent) {
  return {
    type: CREATING_EVENT_SUCCEEDED,
    newEvent: newEvent,
    loading: true,
    isError: false,
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


// some input validation here before
// sending it to the API
// when OK from the API place it in store for rendering the event so that the user
// know it was created

export function createEvent(date, time, title, description, userId) {
  return function(dispatch) {
    dispatch(creatingEvent());

    const newEvent = [
      {
        "title": title,
        "description": description,
        "date": date,
        "time": time,
        "author": userId,
        "participants": [ userId ],
      },
    ];
      
    dispatch(creatingEventSucceeded(newEvent));
    let isError = false;

    if (isError) {
      dispatch(creatingEventFailed('creating event failed'));
    }
  };
}