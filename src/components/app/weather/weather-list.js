
import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchWeather } from './weather-actions';
//import Chart from './weather-chart';

class WeatherList extends Component{

  componentDidMount(){
    if(!this.props.list){
      const { name } = this.props.match.params;
      this.props.fetchWeather(name);
    }
  }
  renderWeather(cityData){
    const name = cityData.city.name;

    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // convert Kelvin to celsius temp
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);


    console.log(temps);//eslint-disable-line

    return(
      <tr key={name}>
        <h3 data={temps} color="orange" units="C"></h3>
        <h3 data={pressures} color="green" units="hPA"></h3>
        <h3 data={humidities} color="blue" units="%" ></h3>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (celsius)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>

          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

WeatherList.propTypes = {
  fetchWeather: PropTypes.func,
  weather: PropTypes.array,
  list: PropTypes.array,
  name: PropTypes.string,
  match: PropTypes.func,
};

function mapStateToProps({weather}, ownProps){
  return {list: weather[ownProps.match.params.name]};
}

export default connect(mapStateToProps, { fetchWeather })(WeatherList);
