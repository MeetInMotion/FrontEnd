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

export const LOADING_EVENT = 'LOADING_EVENT';
function loadingEvent() {
  return {
    type: LOADING_EVENT,
    loading: true,
  };
}

export const LOADING_EVENT_SUCCEEDED = 'LOADING_EVENT_SUCCEEDED';
function loadingEventSucceeded(event) {
  return {
    type: LOADING_EVENT_SUCCEEDED,
    theEvent: event,
    loading: true,
    isError: false,
  };
}

export const LOADING_EVENT_FAILED = 'LOADING_EVENT_FAILED';
function loadingEventFailed(error) {
  return {
    type: LOADING_EVENT_FAILED,
    isError: false,
    error: error,
  };
}

export const CLEARING_EVENT = 'CLEARING_EVENT';
function clearingEvent(emptyList) {
  return {
    type: CLEARING_EVENT,
    loading: true,
    theEvent: emptyList,
    eventLocation: {coordinates: {east: null,north: null}},
    participants: emptyList,
  };
}

export const LOADING_PARTICIPANTS = 'LOADING_PARTICIPANTS';
function loadingParticipants() {
  return {
    type: LOADING_PARTICIPANTS,
    loading: true,
  };
}

export const LOADING_PARTICIPANTS_SUCCEEDED = 'LOADING_PARTICIPANTS_SUCCEEDED';
function loadingParticipantsSucceeded(participants) {
  return {
    type: LOADING_PARTICIPANTS_SUCCEEDED,
    participants: participants,
    loading: true,
    isError: false,
  };
}

export const LOADING_PARTICIPANTS_FAILED = 'LOADING_PARTICIPANTS_FAILED';
function loadingParticipantsFailed(error) {
  return {
    type: LOADING_PARTICIPANTS_FAILED,
    isError: false,
    error: error,
  };
}

export const ATTEND_EVENT = 'ATTEND_EVENT';
function attendingEvent(id) {
  return {
    type: ATTEND_EVENT,
    loading: true,
    participants: [id],
  };
}

export const UNATTEND_EVENT = 'UNATTEND_EVENT';
function unAttendingEvent(list) {
  return {
    type: ATTEND_EVENT,
    loading: true,
    participants: [list], // fixa detta
  };
}


export const ATTENDING_STATUS_UPDATE = 'ATTENDING_STATUS_UPDATE';
function setUserAttendingStatus(status) {
  return {
    type: ATTENDING_STATUS_UPDATE,
    loading: true,
    attending: status,
  };
}

export function loadEvent(id, userId) {
  return function(dispatch) {
    dispatch(loadingEvent());

    fetch("http://api.localhost:8081/events/" + id)
      .then(function(response) {
        return response.json();
      }) 
      .then(function(json) {
        dispatch(loadingEventSucceeded(json));
        dispatch(loadParticipants(id));
        

        dispatch(loadLocation(json.location_id, id, userId));
      });
    let isError = false;
    
    if (isError) {
      dispatch(loadingEventFailed('error message'));
    }
  };
}

export function loadLocation(id, eventId, userId) {
  return function(dispatch) {
    dispatch(loadingLocation());
    fetch("http://api.localhost:8081/locations/" + id)
      .then(function(response) {
        return response.json();
      }) 
      .then(function(json) {
        dispatch(loadingLocationSucceeded(json));
        dispatch(getAttendStatus(eventId, userId));

      });
    let isError = false;
    
    if (isError) {
      dispatch(loadingLocationFailed('error message'));
    }
  };
}

export function loadParticipants(id) {
  return function(dispatch) {
    dispatch(loadingParticipants());

    fetch("http://api.localhost:8081/events/" + id + "/users")
      .then(function(response) {
        return response.json();
      }) 
      .then(function(json) { 
        dispatch(loadingParticipantsSucceeded(json)); 
      });
    
    let isError = false;

    if (isError) {
      dispatch(loadingParticipantsFailed('error message'));
    }
  };
}

export function attendEvent(eventId, userId) {
  return function(dispatch) {
    
    fetch('http://api.localhost:8081/users/' + userId + '/events', 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify( eventId ),
      }
    )
    .then(function(res) {
      dispatch(attendingEvent(eventId));
      return res.json();
    }).
    then(function(json) {
      console.log(json); //eslint-disable-line
    });

  };
}

export function unAttendEvent(eventId, userId) {
  return function(dispatch) {

    fetch('http://api.localhost:8081/users/' + userId + '/events/' + eventId, 
      { 
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
      }
    )
    .then(function(res) {

    //   // remove userId from the participants list
      const newList = [];
      dispatch(unAttendingEvent(newList));
    //   //

      return res.json();
    }).
    then(function(json) {
      console.log(json); //eslint-disable-line
    });
  };
}

export function getAttendStatus(eventId, userId) {
  return function(dispatch) {
    // console.log('get status : http://api.localhost:8081/events/' + eventId + '/users/' + userId);

    fetch('http://api.localhost:8081/events/' + eventId + '/users/' + userId)
      .then(function(response) {
        return response.json();
      }) 
      .then(function(json) { 
        dispatch(setUserAttendingStatus(json)); 
      });
  };
}



export function clearEvent() {
  return function(dispatch) {
    dispatch(clearingEvent([]));
  };
}

