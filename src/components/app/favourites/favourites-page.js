import Favourites from './favourites.jsx';
import { loadingPage } from '../../page-actions.js';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('favourites')),
  };
}

export default connect(null, mapDispatchToProps)(Favourites);
