import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadFbSdk, getFbLoginStatus} from './facebook-functions';

export default class FacebookLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
    };
  }

  getFbLoginStatus() {
    return window.FB.getLoginStatus(responseStatus => {(responseStatus);
    });
  }

  componentWillMount() {
    loadFbSdk(this.props.appId, this.props.version)
      .then(() => getFbLoginStatus())
      .then(response => {
        if (response.status === 'connected') {
          this.setState({ isConnected: true });
        }
        this.props.userDataState(response);
      });
  }

  render() {
    return (
      <div>
        <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="true" data-auto-logout-link="true" data-use-continue-as="true"></div>
      </div>
    );
  }
}

FacebookLogin.propTypes = {
  appId: PropTypes.string.isRequired,
  version: PropTypes.string,
  userDataState: PropTypes.func,
  onLoginState: PropTypes.func,
  onLogoutState: PropTypes.func,
  onClick: PropTypes.func,
};

FacebookLogin.defaultProps = {
  version: 'v2.9',
  userDataState: () => {},
  onLoginState: () => {},
  onLogoutState: () => {},
  onClick: () => {},
};
