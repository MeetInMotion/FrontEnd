export const LOADING_FOOTER = 'LOADING_FOOTER';
export function loadingFooter(page) {
  return {
    type: LOADING_FOOTER,
    payload: page,
  };
}

export const LOADING_FOOTER_SUCCEEDED = 'LOADING_FOOTER_SUCCEEDED';
export function loadingFooterSucceeded(payload) {
  return {
    type: LOADING_FOOTER_SUCCEEDED,
    payload: payload,
  };
}

export const LOADING_FOOTER_FAILED = 'LOADING_FOOTER_FAILED';
export function loadingFooterFailed(error) {
  return {
    type: LOADING_FOOTER_FAILED,
    payload: error,
  };
}

export function loadFooter(page) {
  return function(dispatch) {
    dispatch(loadingFooter(page));
    // Following part should be replaced with a call to the fetch-api when server is up
    let payload;
    setTimeout(function() {
      switch (page) {
      case 'home': {
        payload = {
          navLinks: [
            {
              text: 'Categories',
              path: 'Categories',
            },
            {
              text: 'Settings',
              path: 'settings',
            },
          ],
        };
        break;
      }
      case 'categories': {
        payload = {
          navLinks: [
            {
              text: 'Home',
              path: 'home',
            },
            {
              text: 'Settings',
              path: 'settings',
            },
          ],
        };
        break;
      }
      case 'settings': {
        payload = {
          navLinks: [
            {
              text: 'Home',
              path: 'home',
            },
            {
              text: 'Categories',
              path: 'Categories',
            },
          ],
        };
        break;
      }
      case 'weather': {
        payload = {
          navLinks: [
            {
              text: 'Weather',
              path: 'weather-list',
            },
            {
              text: 'Categories',
              path: 'Categories',
            },
          ],
        };
        break;
      }
      case 'error': {
        dispatch(loadingFooterFailed('could not load'));
      }
      }
    }, 1000);
    dispatch(loadingFooterSucceeded(payload));
  };
}
