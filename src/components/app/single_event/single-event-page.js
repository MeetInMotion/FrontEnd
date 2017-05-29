import SingleEvent from './single-event.jsx';
import { loadingPage } from '../../page-actions.js';
import { loadLocation, clearEvents } from './single-event-actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { 
        loadingPage, 
        loadLocation, 
        clearEvents, 
      },
      dispatch
    ),
  };
}


function mapStateToProps(state) {
  return {
    events: state.events,
    singleEvent: state.singleEvent,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);