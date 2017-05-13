export function loadFbSdk(appId, version) {
  return new Promise(resolve => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId,
        xfbml: true,
        version,
        cookie: true,
      });
      window.FB.AppEvents.logPageView();
      resolve('SDK Loaded!');
    };

    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      const js = d.createElement(s); js.id = id;
      js.src = 'http://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}

export function auth_response_change_callback (response) {
  console.log("auth_response_change_callback");// eslint-disable-line
  console.log(response);// eslint-disable-line
}

export function auth_status_change_callback (response) {
  console.log("auth_status_change_callback: " + response.status);// eslint-disable-line
}
export function getFbLoginStatus() {
  return new Promise(resolve => {
    window.FB.getLoginStatus(responseStatus => {
      resolve(responseStatus);
    });
  });
}
