import Settings from './settings.jsx';
import { connect } from 'react-redux';
import { loadingPage } from '../../page-actions.js';

function mapDispatchToProps(dispatch){
  return {
    loadingPage: () => dispatch(loadingPage('settings')),
  };
}

export default connect(null, mapDispatchToProps)(Settings);
