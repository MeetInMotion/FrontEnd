//epi 59, to handle weather reducer
//epi 60, the data object is what we care about when the Promise returns from the api
//setup iniital state as array instead of null
import {FETCH_WEATHER} from '../actions/index';//import the varialbe so that we can handle it via the switch

export default function(state = [], action){
  //console.log('Action received', action);
  switch(action.type){
  case FETCH_WEATHER:
  //epi 60
    //return [action.payload.data];==>> this is to pass the city data to the payload
    //payload data is what we are interested in from the api weather return
    //return state.push(action.payload.data)==>> this is not good to do
    //because we are setting state.push this is mutating the state
    //we can only getState, we are mutating when we do setState in the reducer, so we ened to return
    //return a pure reducer of state
    //return state.concat([action.payload.data]);
    //this is returning a new version of the state, a pure instead of state using state.concat
    return [action.payload.data, ...state];//this is teh saem as concat sttmt but ES6 syntax
    // return like this [city, city, city]
    //by taking the existing [] and passing the new info into for new array
    // so ...state is what ES6 syntax for new array

  }
  return state;
}
