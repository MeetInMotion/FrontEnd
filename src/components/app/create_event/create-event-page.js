import CreateEvent from './create-event.jsx';
import { loadingPage } from '../../page-actions.js';
import { createEvent } from './create-event-actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { loadingPage, createEvent },
      dispatch
    ),
  };
}

function mapStateToProps(state) {
  return {
    locations: state.locations,
    userInformation: state.userInformation,
    eventCreated: state.createEvent.eventCreated,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
