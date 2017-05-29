import SingleEvent from './single-event.jsx';
import { loadingPage } from '../../page-actions.js';
import { loadLocation, loadParticipants, loadEvent, clearEvent } from './single-event-actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { 
        loadingPage, 
        loadLocation,
        loadParticipants,
        loadEvent,
        clearEvent, 
      },
      dispatch
    ),
  };
}


function mapStateToProps(state) {
  return {
    // events: state.events,
//    location: state.location,
//    theEvent: state.theEvent,
    singleEvent: state.singleEvent,
//    participants: state.participants,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);