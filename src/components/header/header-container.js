import {connect} from 'react-redux';
import Header from './header.jsx';

function mapStateToProps(state) {
  return {
    header: state.header,
    user: state.user,
  };
}

export default connect(mapStateToProps)(Header);
