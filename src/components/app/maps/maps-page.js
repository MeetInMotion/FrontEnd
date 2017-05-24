import Maplayout from './maplayout.jsx';
import { connect } from 'react-redux';
import { loadingPage } from '../../page-actions.js';


function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('maplayout')),
  };
}

export default connect(null, mapDispatchToProps)(Maplayout);
