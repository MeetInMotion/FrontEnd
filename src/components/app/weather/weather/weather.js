/*
epi 52 & 53 state for the Component level, a callback
*/

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { PropTypes } from 'prop-types';
import {fetchWeather} from '../actions/index';
import WeatherList from './weather-list';
class Weather extends Component{
  //this is the component state
  constructor(props){
    super(props);

    this.state = { term: '' };

    //bind the input change to the SearchBar of (this) and replace the exisiting values by the assigned to this.onInputChange
    //a and set the setSTate in the onInputChange
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //if doesn't do this bind to the onFormSubmit callback, will get error of null
  }

  onInputChange(event){
  //event object is vanilla javascript thing
    console.log(event.target.value);//eslint-disable-line
    //event.target.value is vanilla javascript thing
    this.setState({ term: event.target.value });//setState will change the state of the searchbar component
  }

  onFormSubmit(event){
    event.preventDefault();
    //onFormSubmit this is a callback
    //this is to not allow the browser to do the default of submitting the event, is need to use
    //epi 58, when user enter the submit from, will fire the api request when action is kick in,
    //need to connect search bar to redux library and bind the redux and to to fetch the weather
    //call the action creator
    this.props.fetchWeather(this.state.term);
    //to connect to the city user enter, it is call term for us
    this.setState({term:''});
    //the term is empty string, will re-render everytime user enter

  }

  render(){
    return (
      //epi 54, form element, when there is a button click,
      //form will make a request to the backend to start render on the DOM, it is the browser
      //that is sending the request when there is no code for handle the submit
      //onSubmit is a property for handling on event for form
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}//this is when user input their text
          onChange={this.onInputChange}//wheneven there is a change, onChange will run onInputChange(),
          //this is a callback function and when there is a callback(), need to bind this.onInputChange in the above statement
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>

        <WeatherList />
      </form>
    );
  }
}

Weather.propTypes = {
  fetchWeather: PropTypes.func,
};


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
  //bind the action to the middleware for our redux app
}

export default connect(null, mapDispatchToProps)(Weather);
//when export default is here then the class doesn't need to have export defaut
//map dispatch null, at the first state value to null, map searchbar to props
