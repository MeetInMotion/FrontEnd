import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './weather-actions';

class Weather extends Component{
  componentDidMount() {
    this.props.actions.fetchWeather('2673730');
  }


  renderData(cityData){
    const name = cityData.city.name;
    //epi 63, weather.main.temp ==> return the temp data from the list main object of the city
    //const temps = cityData.list.map(weather => weather.main.temp);
    //epi 65, adding pressure and humidity charts
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // convert Kelvin to celsius temp
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    console.log('temp' + temps);//eslint-disable-line
    console.log('name' + name);//eslint-disable-line
    console.log('pressure' + pressures);//eslint-disable-line
    console.log('humidity' + humidities);//eslint-disable-line
    //const { data } = this.props.match.params;
    console.log('what is this:' + this.props.weather);//eslint-disable-line
    return _.map(this.props.weather, list => {
      console.log('renderData: ' + data);//eslint-disable-line
      return(
        <div>
          {list.main.temp}
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <h3>Nuvarande Väder</h3>
        <ul className="list-group">
          { this.renderData
          }
        </ul>
      </div>
    );
  }
}

Weather.propTypes = {
  // weather: PropTypes.object({
  //   data: PropTypes.object({
  //     list: PropTypes.array,
  //   }),
  // }),

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

/*import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from './weather-actions';

class Weather extends Component{
  constructor(props){
    super(props);
    this.state = { term: 'Stockholm' };
    this.renderData = this.renderData.bind(this);
  }
/*
  componentDidMount(){


    const { data } = this.props.match.params;
    console.log('fetch:' + fetchWeather());//eslint-disable-line

  }


  renderData(cityData){
    this.props.fetchWeather(this.state.term);
    const name = cityData.city.name;
    //epi 63, weather.main.temp ==> return the temp data from the list main object of the city
    //const temps = cityData.list.map(weather => weather.main.temp);
    //epi 65, adding pressure and humidity charts
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // convert Kelvin to celsius temp
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    console.log('temp' + temps);//eslint-disable-line
    console.log('name' + name);//eslint-disable-line
    console.log('pressure' + pressures);//eslint-disable-line
    console.log('humidity' + humidities);//eslint-disable-line
    //const { data } = this.props.match.params;
    console.log('what is this:' + this.props.weather);//eslint-disable-line
    return _.map(this.props.weather, list => {
      console.log('renderData: ' + data);//eslint-disable-line
      return(
        <div>
          {list.main.temp}
        </div>
      );
    });
  }

  render(){
    return(
      <div>
        <h3>Nuvarande Väder</h3>
        <ul className="list-group">
          {this.renderData}
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
  fetchWeather: PropTypes.func,
};

function mapStateToProps(state) {
  return  { weather: state.weather };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
  //bind the action to the middleware for our redux app
}

export default connect( mapStateToProps, mapDispatchToProps)(Weather);
*/
