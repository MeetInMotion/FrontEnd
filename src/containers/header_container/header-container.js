import {connect} from 'react-redux';
import Header from '../../components/header/header.jsx';

function mapStateToProps(state) {
  return {
    header: state.header,
  };
}

export default connect(mapStateToProps)(Header);
