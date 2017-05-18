import CreateEvent from './create-event.jsx';
import { loadingPage } from '../../page-actions.js';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    locations: state.locations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('create-event')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
