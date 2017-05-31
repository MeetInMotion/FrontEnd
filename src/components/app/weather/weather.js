import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from './weather-actions';

class Weather extends Component{

  componentDidMount(){
    console.log('fetch:' + fetchWeather());//eslint-disable-line
    this.props.fetchWeather();
  }

  renderData(){
    return _.map(this.props.weather, list => {
      return(
        <li className="list-group-item" key={list.main}>
          {list.main.temp}
        </li>
      );
    });
  }

  render(){
    console.log(this.props.list);//eslint-disable-line
    return(
      <div>
        <h3>Nuvarande Väder</h3>
        <ul className="list-group">
          {this.renderData()}
        </ul>
      </div>
    );
  }
}

Weather.propTypes = {
  weather: PropTypes.array,
  fetchWeather: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      list: PropTypes.array,
      main: PropTypes.object,
      temp: PropTypes.string,
    }),
  }),
};
function mapStateToProps(state) {
  return  { weather: state.weather };
}

export default connect( mapStateToProps, { fetchWeather })(Weather);
