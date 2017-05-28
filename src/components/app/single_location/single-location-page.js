import SingleLocation from './single-location.jsx';
import { loadingPage } from '../../page-actions.js';
import {loadLocation} from './actions';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('single-location')),
    loadLocation: (id) => dispatch(loadLocation(id)),
  };
}

function mapStateToProps(state) {
  return {
    location: state.location,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleLocation);
