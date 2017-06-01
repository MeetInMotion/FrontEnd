
export const LOADING_LOCATION = "LOADING_LOCATION";
export function loadingLocation() {
  return {
    type: LOADING_LOCATION,
    loading:true,
  };
}

export const LOADING_LOCATION_SUCCESS = "LOADING_LOCATION_SUCCESS";
export function loadingLocationSuccess(location) {
  return {
    type: LOADING_LOCATION_SUCCESS,
    theLocation: location,
  };
}

export const LOADING_LOCATION_FAILED = "LOADING_LOCATION_FAILED";
export function loadingLocationFailed() {
  return {
    type: LOADING_LOCATION_FAILED,
  };
}

export const ADDING_LOCATION_USER = "ADDING_LOCATION_USER";
export function addingLocationUser() {
  return {
    type: ADDING_LOCATION_USER,
  };
}

export const ADDING_LOCATION_USER_SUCCESS = "ADDING_LOCATION_USER_SUCCESS";
export function addingLocationUserSuccess(added) {
  return {
    type: ADDING_LOCATION_USER_SUCCESS,
    follower: added,
  };
}

export const ADDING_LOCATION_USER_FAILED = "ADDING_LOCATION_USER_FAILED";
export function addingLocationUserFailed() {
  return {
    type: ADDING_LOCATION_USER_FAILED,
  };
}

export const CLEAR_LOCATION = "CLEAR_LOCATION";
export function clearLocation() {
  return {
    type: CLEAR_LOCATION,
  };
}

export const FOLLOWING_STATUS_UPDATE = 'FOLLOWING_STATUS_UPDATE';
function setUserFollowingStatus(status) {
  return {
    type: FOLLOWING_STATUS_UPDATE,
    loading: true,
    following: status,
  };
}



export function addLocationToUser(location, userId) {
  console.log('add Location');

  return function(dispatch) {
    dispatch(addingLocationUser());
    setUserFollowingStatus(true);
    console.log(location, userId); //eslint-disable-line
    console.log(location.payload.id); //eslint-disable-line
    fetch('http://api.localhost:8081/users/' + userId + '/locations', 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({"location": location.payload.id}),
      }
    )
    .then(function(res) {
      console.log(res); //eslint-disable-line
      return res.json();
    }).
    then(function(json) {
      dispatch(addingLocationUserSuccess());
      console.log(json); //eslint-disable-line
    });
    
    let isError = false;

    if (isError) {
      dispatch(addingLocationUserFailed('creating event failed'));
    }
  };
}

export function removeLocationToUser(locationId, userId) {
  console.log('add Location');

  return function() {
//    dispatch(addingLocationUser());
    setUserFollowingStatus(false);

    console.log(location, userId); //eslint-disable-line

    fetch(
      'http://api.localhost:8081/users/' + userId + '/locations/' + locationId, 
      { 
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    ).then(
      function(res) {
        return res.json();
      }
    );
  };
}



export function getFollowStatus(userId) {
  console.log('get status for user  ', userId);

  return function(dispatch) {

    // api
    let update = true;
    dispatch(setUserFollowingStatus(update));
  };
}


export function loadLocation(id, userId) {
  return function(dispatch) {
    console.log('eslint ', userId);
//    dispatch(setUserFollowingStatus(false));
    dispatch(clearLocation());

    dispatch(loadingLocation());
    fetch("http://api.localhost:8081/locations/"+id)
      .then(res => {
        if (res.ok) {
          res.json().then(json => {
            dispatch(loadingLocationSuccess(json));
          });
        } else {
          dispatch(loadingLocationFailed(res.body));

          if (userId) {
            dispatch(getFollowStatus(userId));
          } else {
            dispatch(setUserFollowingStatus(false));
          }
        }
      });
  };
}
