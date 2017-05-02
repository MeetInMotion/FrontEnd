import Favourites from '../../pages/favourites/favourites.jsx';
import { loadingPage } from '../../actions/page_actions/page-actions.js';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('favourites')),
  };
}

export default connect(null, mapDispatchToProps)(Favourites);
