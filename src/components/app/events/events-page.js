import Events from './events.jsx';
import { loadingPage } from '../../page-actions.js';
import {connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('events')),
  };
}

export default connect(null, mapDispatchToProps)(Events);
