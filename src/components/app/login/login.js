import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import FacebookLogin from './facebook-login';
import { getUserLoginStatus, getUserData, getUserInformation } from './login-actions';
import Show from './show.jsx';
import ListItem from './list-item.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getUserInformation = this.getUserInformation.bind(this);
  }

  getUserInformation() {
    if (this.props.loginConnection.isConnected && !this.props.userInformation) {
      window.FB.api('/me', 'GET', {fields: 'id,name,email,picture.width(200).height(200)'},
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
    const {name, picture} = this.props.userInformation || { id: null, name: null, email: null, picture: null };
    const myFun = () => {
      console.log('test onClick');// eslint-disable-line
      this.props.getUserData();
    };

    this.getUserInformation();
    return (
      <div style={styles.container}>
        <FacebookLogin
          appId="278320365928562"
          userDataState={this.login}
          onLoginState={this.login}
          onLogoutState={this.logout}
          onClick={myFun()}
          //onClick={() => this.props.getUserData()}
        />
        <Show isDisplayed={this.props.userInformation}>
          <img src={picture}/>
          <ListItem text={name} />
        </Show>

      </div>
    );
  }
}

Login.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
/*
render() {
  this.getUserInformation();
  return (
    <div style={styles.container}>
      <FacebookLogin
        appId="278320365928562"
        userDataState={this.login}
        onLoginState={this.login}
        onLogoutState={this.logout}
        onClick={() => this.props.getUserData()}
      />
    </div>
  );
}
*/
