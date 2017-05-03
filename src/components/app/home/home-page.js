import Home from './home.jsx';
import { connect } from 'react-redux';
import { loadingPage } from '../page-actions.js';



function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('meet in motion')),
  };
}

export default connect(null, mapDispatchToProps)(Home);
