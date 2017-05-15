import SingleLocation from './single-location.jsx';
import { loadingPage } from '../../page-actions.js';
//import * as actions from './event-actions.js';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    locations: state.locations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators({ ...actions, loadingPage: loadingPage }, dispatch),
    loadingPage: () => dispatch(loadingPage('single-location')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleLocation);