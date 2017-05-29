

export function loadFbSdk(appId, version) {
  return new Promise(resolve => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId,
        xfbml: true,
        version,
        cookie: true,
        status: true,
      });
      window.FB.AppEvents.logPageView();
      resolve('SDK Loaded!');
    };

    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      const js = d.createElement(s); js.id = id;
      js.src = 'http://connect.facebook.net/sv_SE/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}

export function getFbLoginStatus() {
  return new Promise(resolve => {
    window.FB.getLoginStatus(responseStatus => {
      resolve(responseStatus);
    });
  });
}

