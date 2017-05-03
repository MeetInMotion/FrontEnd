export const LOADING_HEADER = 'LOADING_HEADER';
export function loadingHeader(page) {
  return {
    type: LOADING_HEADER,
    payload: page,
  };
}

export const LOADING_HEADER_SUCCEEDED = 'LOADING_HEADER_SUCCEEDED';
export function loadingHeaderSucceeded(payload) {
  return {
    type: LOADING_HEADER_SUCCEEDED,
    payload: payload,
  };
}

export const LOADING_HEADER_FAILED = 'LOADING_HEADER_FAILED';
export function loadingHeaderFailed(error) {
  return {
    type: LOADING_HEADER_FAILED,
    payload: error,
  };
}

export function loadHeader(page) {
  return function(dispatch) {
    dispatch(loadingHeader(page));
    // Following part should be replaced with a call to the fetch-api when server is up
    let payload;
    setTimeout(function() {
      switch (page) {
      case 'home': {
        payload = {
          headerTitle: 'Home',
        };
        break;
      }
      case 'categories': {
        payload = {
          headerTitle: 'Categories',
        };
        break;
      }
      case 'settings': {
        payload = {
          headerTitle: 'Settings',
        };
        break;
      }
      case 'error': {
        dispatch(loadingHeaderFailed('could not load'));
      }
      }
    }, 1000);
    dispatch(loadingHeaderSucceeded(payload));
  };
}
