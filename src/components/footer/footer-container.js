import { connect } from 'react-redux';
import Footer from './footer.jsx';
import {
  loadFbSdk,
} from './footer-actions';

import {
  signUserOut,
  authenticateUser,
} from '../header/user-actions';


function mapStateToProps(state) {
  return {
    footer: state.footer,
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
