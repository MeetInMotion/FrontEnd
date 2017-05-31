import SingleLocation from './single-location.jsx';
import { loadingPage } from '../../page-actions.js';
import {loadLocation, addLocationToUser, removeLocationToUser, setFollowing} from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { 
        loadingPage,
        loadLocation,
        addLocationToUser,
        removeLocationToUser,
        setFollowing,
      },
      dispatch
    ),
  };
}

function mapStateToProps(state) {
  return {
    location: state.location,
    user: state.user,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleLocation);
