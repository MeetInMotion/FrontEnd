import Event from './events.jsx';
import { loadingPage } from '../../page-actions.js';
import * as actions from './event-actions.js';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    events: state.events.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('events')),
    actions: () => dispatch(actions('actions')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);