import SingleEvent from './single-event.jsx';
import { loadingPage } from '../../page-actions.js';
import {loadLocation} from './single-event-actions.js';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('categories')),
    loadLocation: (id) => dispatch(loadLocation(id)),
  };
}

function mapStateToProps(state) {
  return {
    events: state.events,
    singleEvent: state.singleEvent,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);