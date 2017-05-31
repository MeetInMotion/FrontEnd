import config from '../../../../config/config';
export const LOADING_LOCATIONS = 'LOADING_LOCATIONS';
function loadingLocations() {
  return {
    type: LOADING_LOCATIONS,
    loading: true,
  };
}

export const LOADING_LOCATIONS_SUCCEEDED = 'LOADING_LOCATIONS_SUCCEEDED';
function loadingLocationsSucceeded(locationsList) {
  return {
    type: LOADING_LOCATIONS_SUCCEEDED,
    locationsList: locationsList,
    loading: true,
    isError: false,
  };
}

export const LOADING_LOCATIONS_FAILED = 'LOADING_LOCATIONS_FAILED';
function loadingLocationsFailed(error) {
  return {
    type: LOADING_LOCATIONS_FAILED,
    isError: false,
    error: error,
  };
}

export function loadLocations(id) {
  return function(dispatch) {
    dispatch(loadingLocations());

    fetch(config.host+"/categories/" + id)
      .then(function(response) {
        return response.json();
      }) 
      .then(function(json) {
        dispatch(loadingLocationsSucceeded(json)); 
      });
    
    let isError = false;

    if (isError) {
      dispatch(loadingLocationsFailed('error message'));
    }
  };
}
