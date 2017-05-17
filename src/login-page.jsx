import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Login from './components/app/login/login.js';
import Root from './root.jsx';

class LoginPage extends React.Component {

  requireAuth() {
    const { store } = this.props;
    if (this.props.isConnected) {
      return(
        <Root store={ store } />
      );
    } else {
      return(
        <Login store={ store } />
      );
    }
  }

  render() {
    return(
      <div>
        
        { this.requireAuth() }
        
      </div>
    );
  }
}

LoginPage.propTypes = {
  store: PropTypes.object.isRequired,
  loginConnection: PropTypes.object,
  actions: PropTypes.shape(),
  isConnected: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    isConnected: state.loginConnection.isConnected,
  };
}

export default connect(mapStateToProps)(LoginPage);