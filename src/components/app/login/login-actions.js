export function getUserLoginStatus(status) {
  return { type: 'loginResponse', payload: status };
}

export function getUserData() {
  return { type: 'getData' };
}

export function getUserInformation(userInformation) {
  return { type: 'getUserInformation', payload: userInformation };
}


export const LOADING_LOGINSTATUS = 'LOADING_LOGINSTATUS';
export function loadingLoginStatus() {
  return {
    type: LOADING_LOGINSTATUS,
    loading: true,
  };
}

export const LOADING_LOGINSTATUS_SUCCEEDED = 'LOADING_LOGINSTATUS_SUCCEEDED';
export function loadingLoginStatusSucceeded(responseStatus) {
  return {
    type: LOADING_LOGINSTATUS_SUCCEEDED,
    isConnected: responseStatus,
    loading: true,
    isError: false,
  };
}

export const LOADING_LOGINSTATUS_FAILED = 'LOADING_LOGINSTATUS_FAILED';
export function loadingLoginStatusFailed(error) {
  return {
    type: LOADING_LOGINSTATUS_FAILED,
    isError: false,
    error: error,
  };
}



/*
export function setLoginStatus(responseStatus) {
  return function(dispatch) {
    dispatch(setInLoginStatus() => );


    setTimeout(function() {
      dispatch(loadingCategoriesSucceeded(categoriesList));
    }, 1000);
    let isError = false;
    if (isError) {
      dispatch(loadingCategoriesFailed('error message'));
    }
  };
}
*/
