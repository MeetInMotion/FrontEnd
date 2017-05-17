import CreateEvent from './create-event.jsx';
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
    loadingPage: () => dispatch(loadingPage('create-event')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
