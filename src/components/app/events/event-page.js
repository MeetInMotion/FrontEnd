import Events from './events.jsx';
import { loadingPage } from '../../page-actions.js';
import * as actions from './event-actions.js';
import { loadEvents } from './event-actions.js';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('events')),
    actions: () => dispatch(actions('actions')),
    loadEvents: () => dispatch(loadEvents()),
  };
}

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Events);