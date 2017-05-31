//import _ from 'lodash';
import {FETCH_WEATHER} from './weather-actions';

export default function(state = [], action){
  //console.log('Action received', action);
  switch(action.type){
  case FETCH_WEATHER:
    //return _.mapKeys(action.payload.data, 'city');
    return [action.payload.data, ...state];
  }
  return state;
}
