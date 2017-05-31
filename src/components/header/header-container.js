import {connect} from 'react-redux';
import Header from './header.jsx';
import {
  loadFbSdk,
} from './header-actions';

import {
  signUserOut,
  authenticateUser,
} from './user-actions';

function mapStateToProps(state) {
  return {
    header: state.header,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch){
  return {
    loadFbSdk: () => dispatch(loadFbSdk()), 
    authenticateUser: (token) => dispatch(authenticateUser(token)),
    signUserOut: () => dispatch(signUserOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
