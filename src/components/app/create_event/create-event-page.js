import CreateEvent from './create-event.jsx';
import { loadingPage } from '../../page-actions.js';
import {loadLocation} from '../single_location/actions';
import { createEvent } from './create-event-actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { loadingPage, createEvent },
      dispatch
    ),
    loadLocation: (id) => dispatch(loadLocation(id)),
  };
}

function mapStateToProps(state) {
  return {
    user: state.user,
    location: state.location,
    userInformation: state.userInformation,
    eventCreated: state.createEvent.eventCreated,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
