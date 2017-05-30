//epi 61, create a weather list components,
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { PropTypes } from 'prop-types';
//need to pass the data from redux

//epi 64 we take this import line into chart.js because we are refactoring
//this Sparklines code in the renderWeather() to make it so that we
//don't duplicate teh code several times
//import {Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';//call the chart.js to call the Sparklines code
//epi 67
//import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  //epi 62 to render teh weather list by taking the array of weather of a acity,
  //render a city of single row
  //epi 63 will do the citydata list where we map over each object where
  //list: [] is an array containing all the data object of a city, see notes
  renderWeather(cityData){
    const name = cityData.city.name;
    //epi 63, weather.main.temp ==> return the temp data from the list main object of the city
    //const temps = cityData.list.map(weather => weather.main.temp);
    //epi 65, adding pressure and humidity charts
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // convert Kelvin to celsius temp
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);


    console.log(temps);//eslint-disable-line
    //epi 64 we take the Sparklines tag code into chart.js file, refactoring
    // teh chart componet so that we can reuse code
    /*
    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="green"/>
          </Sparklines>
        </td>
      </tr>
    )

    Notice that the data={temps is called in the <Chart tag form>}
    where in chart.js the data={props.data}
    */

    //epi 67
  //  const lon = cityData.city.coord.lon;//lon is from weather api
  //  const lat = cityData.city.coord.lat;//this line can be called using ES6 syntax
    //const { lon, lat } = cityData.city.coord;
    //<td>{name}</td> this tag is replace with <td><GoogleMap lon={lon} lat={lat} />
    //since we now have a map of the city

    return(
      <tr key={name}>
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPA" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
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
//  fetchWeather: PropTypes.func,
  weather: PropTypes.array,
};

//htis is to hook the redux state to property for weather so that we
//can pass the weather inside the weatherlist
function mapStateToProps({state}){
  return {
    //we are pulling one property via pulling state.weather by passing in as state in
    //the mapStateToProps(state), so to use ES6 syntax, then pass in weather in the mapStateToProps
    // then reutnr weather no need to state

    //fetchWeather: state.fetchWeather,
    weather: state.weather,
  };
}

export default connect(mapStateToProps, {  })(WeatherList);
//this is to connect the state to props for redux

/*
function mapStateToProps(state){
  //we are pulling one property via pulling state.weather by passing in as state in
  //the mapStateToProps(state)
  return {weather: state.weather};
}
*/
