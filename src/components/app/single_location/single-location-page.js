import SingleLocation from './single-location.jsx';
import { loadingPage } from '../../page-actions.js';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('single-location')),
  };
}

function mapStateToProps(state) {
  return {
    locations: state.locations,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleLocation);