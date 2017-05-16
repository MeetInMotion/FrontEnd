/*
 This Facebook React Redux login code is from:
      Liran Cohen and his repostory is:  github.com:iliran11/facebook-login-redux-react.git
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { loadFbSdk, getFbLoginStatus,  fbLogin, fbLogout } from './facebook-functions';
import styles from './styles';
import Spinner from './spinner.jsx';

export default class FacebookLogin extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.showSpinner = this.showSpinner.bind(this);
    this.state = {
      isWorking: false,
      isConnected: false,
    };
  }

  componentDidMount() {
    this.setState({
      isWorking: true,
    });

    loadFbSdk(this.props.appId, this.props.version)
      .then(loadingResult => {
        if (this.props.verbose) console.info(loadingResult, window.FB); // eslint-disable-line
      })
      .then(() => getFbLoginStatus())
      .then(response => {
        if (response.status === 'connected') {
          this.setState({ isConnected: true });
        }
        this.setState({ isWorking: false });
        this.props.userDataState(response);
      });
  }
  getButtonText() {
    switch (this.state.isConnected) {
    case true:
      return this.props.logoutLabel;
    case false:
      return this.props.loginLabel;
    default:
      return 'this is default';
    }
  }

  buttonClicked() {
    this.props.onClick();
    if (this.state.isConnected) {
      this.logout();
    } else {
      this.login();
    }
  }

  showSpinner() {
    if (this.state.isWorking) {
      return <Spinner style={this.styles.spinner} />;
    } else {
      return <div style={styles.fbIcon} />;
    }
  }

  login() {
    this.setState({ isWorking: true });
    fbLogin(this.props.loginOptions).then(response => {
      if (this.props.verbose) console.info('login response', response);// eslint-disable-line
      if (response.status === 'connected') {
        this.setState({ isConnected: true, isWorking: false });
      } else {
        this.setState({ isConnected: false, isWorking: false });
      }
      this.props.onLoginState(response);
    });
  }

  logout() {
    this.setState({ isWorking: true });
    fbLogout().then(response => {
      if (this.props.verbose) console.info('logout response', response);// eslint-disable-line
      this.setState({
        isWorking: false,
        isConnected: false,
      });
      this.props.onLogoutState(response);
    }
    );
  }
  
  render() {
    this.styles = merge({}, styles, this.props.style);
    return (
      <div>
        {this.props.loginOptions.color}
        <button onClick={this.buttonClicked} style={this.styles.loginBtn}>
          {this.showSpinner()}
          {this.getButtonText()}
        </button>
      </div>
    );
  }
}

FacebookLogin.propTypes = {
  appId: PropTypes.string.isRequired,
  version: PropTypes.string,
  loginLabel: PropTypes.string,
  loginOptions: PropTypes.shape({
    authType: PropTypes.string,
    scope: PropTypes.string,
    returnScopes: PropTypes.bool,
    enableProfileSelector: PropTypes.bool,
    profileSelectorIds: PropTypes.string,
    color: PropTypes.string,
  }),
  logoutLabel: PropTypes.string,
  verbose: PropTypes.bool,
  userDataState: PropTypes.func,
  onLoginState: PropTypes.func,
  onLogoutState: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.string,
};

FacebookLogin.defaultProps = {
  loginLabel: 'Continue with Facebook',
  version: 'v2.9',
  loginOptions: {
    scope: 'email',
  },
  logoutLabel: 'Log out from Facebook',
  verbose: false,
  userDataState: () => {},
  onLoginState: () => {},
  onLogoutState: () => {},
  onClick: () => {},
};
