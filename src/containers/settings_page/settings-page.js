import Settings from '../../pages/settings/settings.jsx';
import { connect } from 'react-redux';
import { loadingPage } from '../../actions/page_actions/page-actions.js';

function mapDispatchToProps(dispatch){
  return {
    loadingPage: () => dispatch(loadingPage('settings')),
  };
}

export default connect(null, mapDispatchToProps)(Settings);
