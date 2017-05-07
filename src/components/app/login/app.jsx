import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FacebookLogin from '../../../../src/facebook-login.jsx';
import { getUserLoginStatus, getUserData, getUserInformation } from './login-actions';
import { PropTypes } from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getUserInformation = this.getUserInformation.bind(this);
  }

  getUserInformation() {
    if (this.props.loginConnection.isConnected && !this.props.userInformation) {
      window.FB.api('/me', 'GET', {},
        userInformation => {
          this.props.getUserInformation(userInformation);
        }
      );
    }
  }
  login(response) {
    this.props.getUserLoginStatus(response.status);
  }
  logout(response) {
    this.props.getUserLoginStatus(response.status);
    this.props.getUserInformation(null);
  }
  render() {
    this.getUserInformation();
    return (
      <div style={styles.container}>
        <FacebookLogin
          appId="278320365928562"
          mountedDataEvent={this.login}
          onLoginEvent={this.login}
          onLogoutEvent={this.logout}
          onClick={() => this.props.getUserData()}
        />
      </div>
    );
  }
}

App.propTypes = {
  getUserLoginStatus: PropTypes.func,
  getUserData: PropTypes.func,
  getUserInformation: PropTypes.func,
  userInformation: PropTypes.object,
  loginConnection: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUserLoginStatus, getUserData, getUserInformation,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    userInformation: state.userInformation,
    loginConnection: state.loginConnection,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
