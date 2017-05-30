import Event from './events.jsx';
import { loadingPage } from '../../page-actions.js';
import { loadEvents, clearEvents } from './event-actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    events: state.events,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(
      { 
        loadingPage, 
        clearEvents, 
      },
      dispatch
    ),
    loadEvents: () => dispatch(loadEvents(ownProps.url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
