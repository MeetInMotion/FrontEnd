import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from './weather-actions';

class Weather extends Component{

  componentDidMount(){
    const { data } = this.props.match.params;
    console.log('fetch:' + fetchWeather(data));//eslint-disable-line
    this.props.fetchWeather(data);
  }

  renderData(){
    return _.map(this.props.data, list => {
      return(
        <div>
          {list.main.temp}
        </div>
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
  data: PropTypes.array,
  fetchWeather: PropTypes.func,
  city: PropTypes.object,
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
  return  { data: state.data };
}

export default connect( mapStateToProps, { fetchWeather })(Weather);
