import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from './weather-actions';

class Weather extends Component{

  componentDidMount(){
    this.props.fetchWeather('Stockholm');
/*
    const { data } = this.props.match.params;
    console.log('fetch:' + fetchWeather());//eslint-disable-line
*/
  }

  renderData(){
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
  weather: PropTypes.array,
  fetchWeather: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      data: PropTypes.array,
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
