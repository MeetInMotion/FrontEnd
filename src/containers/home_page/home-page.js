import Home from '../../pages/home/home.jsx';
import { connect } from 'react-redux';
import { loadingPage } from '../../actions/page_actions/page-actions.js';



function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('meet in motion')),
  };
}

export default connect(null, mapDispatchToProps)(Home);
