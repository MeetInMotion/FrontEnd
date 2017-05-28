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
        <div style={styles.container}>
          <h3>MEET IN MOTION</h3>
          <Login store={ store } />
          <i className="fa fa-cog fa-spin fa-5x"></i>
        </div>
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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial',
    fontStyle: 'italic',
    backgroundColor: '#86D1B8',
    height: '100%',
    width: '100%',
  },
};

export default connect(mapStateToProps)(LoginPage);
