import Event from './events.jsx';
import { loadingPage } from '../../page-actions.js';
import { loadUserEvents } from './event-actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { loadingPage, loadUserEvents },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);