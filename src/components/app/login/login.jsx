/*
 This Facebook React Redux login code is from:
      Liran Cohen and his repostory is:  github.com:iliran11/facebook-login-redux-react.git
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  componentWillMount() {
    const {
      loadFbSdk,
      appId,
      version,
    } = this.props;
    loadFbSdk(appId, version);     
  }

  componentDidMount() {
    const {
      user,
      authenticateUser,
      getFbLoginStatus,
    } = this.props;
    
    getFbLoginStatus()
      .then(response => {
        if (response.status === 'connected' && !user.authenticated) {
          authenticateUser(response);
        }

        window.FB.XFBML.parse();
      });
  }

  render() {
    return (
      <div className="fb-login-button" data-scope="public_profile, email" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true">
      </div>
    );
  }
}

Login.propTypes = {
  loadFbSdk: PropTypes.func,
  getFbLoginStatus: PropTypes.func,
  appId: PropTypes.string.isRequired,
  version: PropTypes.string,
  authenticateUser: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    authenticated: PropTypes.bool,
    email: PropTypes.string,
    name: PropTypes.string,
  }),
};

