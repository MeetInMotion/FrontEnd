import Events from '../../pages/events/events.jsx';
import { loadingPage } from '../../actions/page_actions/page-actions.js';
import {connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('events')),
  };
}

export default connect(null, mapDispatchToProps)(Events);
