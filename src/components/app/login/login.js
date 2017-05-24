/*
 This Facebook React Redux login code is from:
      Liran Cohen and his repostory is:  github.com:iliran11/facebook-login-redux-react.git
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import FacebookLogin from './facebook-login';
import { getUserLoginStatus, getUserData, getUserInformation, getAccessToken } from './login-actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getUserInformation = this.getUserInformation.bind(this);
  }

  getUserInformation() {
    if (this.props.loginConnection.isConnected && !this.props.userInformation) {
      window.FB.api('/me', 'GET', {fields: 'id,name,email,picture.width(100).height(100)'},
        userInformation => {
          this.props.getUserInformation(userInformation);
        }
      );
    }
  }

  login(response) {
    this.props.getUserLoginStatus(response.status);
    if (this.props.loginConnection.isConnected){
      this.props.getAccessToken(response.authResponse.accessToken);
    }

  }

  logout(response) {
    this.props.getUserLoginStatus(response.status);
    this.props.getUserInformation(null);
  }

  render() {
    const {name, picture} = this.props.userInformation || { id: null, name: null, email: null, picture: null};
    this.getUserInformation();
    var picture_address = '';
    if (picture) {
      picture_address = picture.data.url;
    }

    const { loginConnection } = this.props;
    console.log('login: ', loginConnection);// eslint-disable-line

    return (
      <div style={styles.container}>

        <FacebookLogin
          appId="278320365928562"
          isConnected={ loginConnection.isConnected }
          userDataState={this.login}
          onLoginState={this.login}
          onLogoutState={this.logout}
          onClick={() => this.props.getUserData()}
        />

        <div className={this.props.userInformation}>
          <img src={picture_address}/>
          <div>{name}</div>
        </div>

      </div>
    );
  }
}

Login.propTypes = {
  getUserLoginStatus: PropTypes.func,
  getUserData: PropTypes.func,
  getUserInformation: PropTypes.func,
  getAccessToken: PropTypes.func,
  userInformation: PropTypes.object,
  loginConnection: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUserLoginStatus, getUserData, getUserInformation, getAccessToken,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    userInformation: state.userInformation,
    loginConnection: state.loginConnection,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
