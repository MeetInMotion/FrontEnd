import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { loadFbSdk, getFbLoginStatus, fbLogin, fbLogout } from './facebook-functions';
import FBlogo from './facebook-style/facebook-logo.jsx';
import styles from './facebook-style/facebook-styles';

export default class FacebookLogin extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.showFBLogo = this.showFBLogo.bind(this);
    this.state = {
      //isLoggedIn: false,
      isConnected: false,
    };
  }
  componentWillMount() {
    /*this.setState({
      isLoggedIn: true,
    });*/
    loadFbSdk(this.props.appId, this.props.version)
      .then(() => getFbLoginStatus())
      .then(response => {
        if (response.status === 'connected') {
          this.setState({ isConnected: true });
        }
        //this.setState({ isLoggedIn: false });
        this.props.onMountEvent(response);
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

  showFBLogo() {
    if (this.state.isLoggedIn) {
    //if (this.state.isConnected) {
      return <FBlogo style={this.styles.spinner} />;
    } else {
      return <div style={styles.fbIcon} />;
    }
  }

  login() {
    //this.setState({ isLoggedIn: true });
    fbLogin(this.props.loginOptions).then(response => {
      if (response.status === 'connected') {
        //this.setState({ isConnected: true, isLoggedIn: false });
        this.setState({ isConnected: true });
      } else {
        //this.setState({ isConnected: true, isLoggedIn: false });
        this.setState({ isConnected: false });
      }
      this.props.onLoginEvent(response);
    });
  }
  logout() {
    //this.setState({ isLoggedIn: true });
    fbLogout().then(response => {
      this.setState({
        //isLoggedIn: false,
        isConnected: false,
      });
      this.props.onLogoutEvent(response);
    }
    );
  }
  render() {
    this.styles = merge({}, styles, this.props.style);
    return (
      <div>
        {this.props.loginOptions.color}
        <button onClick={this.buttonClicked} style={this.styles.loginBtn}>
          {this.showFBLogo()}
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
  onMountEvent: PropTypes.func,
  onLoginEvent: PropTypes.func,
  onLogoutEvent: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.string,
};

FacebookLogin.defaultProps = {
  loginLabel: 'Continue with Facebook',
  version: 'v2.8',
  loginOptions: {
    scope: 'email',
  },
  logoutLabel: 'Log out from Facebook',
  verbose: false,
  onMountEvent: () => {},
  onLoginEvent: () => {},
  onLogoutEvent: () => {},
  onClick: () => {},
};

/*
render() {
  this.styles = merge({}, styles, this.props.style);
  return (
    <div>
      {this.props.loginOptions.color}
      <button onClick={this.buttonClicked} style={this.styles.loginBtn}>
        {this.showFBLogo()}
        {this.getButtonText()}
      </button>
    </div>
  );
}
*/
