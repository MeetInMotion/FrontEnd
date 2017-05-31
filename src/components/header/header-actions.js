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
    let payload;
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
    dispatch(loadingHeaderSucceeded(payload));
  };
}

export const LOADING_FB_SDK = 'LOADING_FB_SDK';
export function loadingFbSdk() {
  return {
    type: LOADING_FB_SDK, 
  };
}

export const LOADING_FB_SDK_SUCCESS = "LOADING_FB_SDK_SUCCESS";
export function loadingFbSdkSuccess(){
  return {
    type: LOADING_FB_SDK_SUCCESS,
  };
}

export function loadFbSdk(){
  return function(dispatch){
    dispatch(loadingFbSdk());
    new Promise(resolve => {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "278320365928562",
          xfbml: true,
          version: "v2.9",
          cookie: true,
          status: true,
        });
        window.FB.AppEvents.logPageView();
        resolve();
      };
      
      (function (d, s, id) {
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        const js = d.createElement(s); js.id = id;
        js.src = 'http://connect.facebook.net/sv_SE/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }).then(() => dispatch(loadingFbSdkSuccess()));
    
  };
}
