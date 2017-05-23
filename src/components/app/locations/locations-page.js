import Locations from './locations.jsx';
import { loadingPage } from '../../page-actions.js';
import { loadLocations } from './location-actions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { loadingPage, loadLocations },
      dispatch
    ),
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    locations: state.locations,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);