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

export function createEvent(values, locationId, userId) {
  console.log('creating...: ', values); // eslint-disable-line no-use-before-define
  console.log('author: ', userId); // eslint-disable-line no-use-before-define
  console.log('at: ', locationId); // eslint-disable-line no-use-before-define

  return function(dispatch) {
    dispatch(creatingEvent());

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
      
    dispatch(creatingEventSucceeded());
    let isError = false;

    if (isError) {
      dispatch(creatingEventFailed('creating event failed'));
    }
  };
}