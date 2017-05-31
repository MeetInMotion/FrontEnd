import SingleLocation from './single-location.jsx';
import { loadingPage } from '../../page-actions.js';
import {loadLocation} from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../weather/weather-actions';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('single-location')),
    loadLocation: (id) => dispatch(loadLocation(id)),
    actions: bindActionCreators(
      {
        fetchWeather,
      },
      dispatch
    ),
  };
}

function mapStateToProps(state) {
  return {
    location: state.location,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleLocation);
