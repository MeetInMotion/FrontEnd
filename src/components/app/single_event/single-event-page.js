import SingleEvent from './single-event.jsx';
import { loadingPage } from '../../page-actions.js';
import * as actions from './event-actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    events: state.events.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions, loadingPage: loadingPage }, dispatch),
    loadingPage: () => dispatch(loadingPage('single-event')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);