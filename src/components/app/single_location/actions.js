
export const LOADING_LOCATION = "LOADING_LOCATION";
export function loadingLocation() {
  return {
    type: LOADING_LOCATION,
  };
}

export const LOADING_LOCATION_SUCCESS = "LOADING_LOCATION_SUCCESS";
export function loadingLocationSuccess(location) {
  return {
    type: LOADING_LOCATION_SUCCESS,
    payload: location,
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
    payload: added,
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

  return function(dispatch) {
    dispatch(addingLocationUser());
    setUserFollowingStatus(true);
    console.log(location, userId); //eslint-disable-line
    fetch('http://api.localhost:8081/users/' + userId + '/locations', 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify( location.id ),
      }
    )
    .then(function(res) {
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

  return function() {
//    dispatch(addingLocationUser());
    setUserFollowingStatus(false);
    console.log(location, userId); //eslint-disable-line
    fetch('http://api.localhost:8081/users/' + userId + '/locations/' + locationId, 
      { 
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then(function(res) {
      return res.json();
    }).
    then(function(json) {
//      dispatch(addingLocationUserSuccess());
      console.log(json); //eslint-disable-line
    });
    
    let isError = false;

    if (isError) {
//      dispatch(addingLocationUserFailed('creating event failed'));
    }
  };
}

export function setFollowing(status) {
  setUserFollowingStatus(status);
}

export function loadLocation(id){
  return function(dispatch){
    setUserFollowingStatus(false);
    dispatch(clearLocation());

    dispatch(loadingLocation());
    fetch("http://api.localhost:8081/locations/"+id)
      .then(res => {
        if(res.ok){
          res.json()
            .then(json => {
              dispatch(loadingLocationSuccess(json));
            });
        }else{
          dispatch(loadingLocationFailed(res.body));
        }
      });
  };
}
