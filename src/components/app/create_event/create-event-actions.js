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

export function createEvent(values, locationId, userId) {

  return function(dispatch) {
    dispatch(creatingEvent());
    dispatch(creatingEventSucceeded());

    dispatch(fuckYouEsLint(values, locationId, userId));

  // add validations

    // const forTheAPI = [
    //   {
    //     title: values.title,
    //     description: values.description,
    //     // level?
    //     location: locationId,
    //     sender: userId,
    //     participants: userId,
    //     time: 'undefined',
    //     date: 'undefined',
    //   },
    // ];

    //

    // API sends back an eventID for rendering the new event
      
    
    let isError = false;

    if (isError) {
      dispatch(creatingEventFailed('creating event failed'));
    }
  };
}