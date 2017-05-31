import SingleEvent from './single-event.jsx';
import { loadingPage } from '../../page-actions.js';
import { loadLocation, loadParticipants, loadEvent, getAttendStatus, attendEvent, unAttendEvent, clearEvent } from './single-event-actions.js';
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
        attendEvent,
        unAttendEvent,
        getAttendStatus,
        clearEvent, 
      },
      dispatch
    ),
  };
}

function mapStateToProps(state) {
  return {
    singleEvent: state.singleEvent,
    user: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);