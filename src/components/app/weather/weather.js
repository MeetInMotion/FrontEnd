// import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './weather-actions';

class Weather extends Component{

  componentDidMount() {
    this.props.actions.fetchWeather('Stockholm');
  }

  render() {
    // console.log('this props: ', this.props);
    return(
      <div>
        <h3>Nuvarande Väder</h3>
        <ul className="list-group">
          { //this.renderData
          }
        </ul>
      </div>
    );
  }
}

Weather.propTypes = {
  weather: PropTypes.object({
    data: PropTypes.object({
      list: PropTypes.array,
    }),
  }),

  actions: PropTypes.shape({
    fetchWeather: PropTypes.func,
  }),
};

function mapStateToProps(state) {
  return  { 
    weather: state.weather,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { 
        fetchWeather,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
