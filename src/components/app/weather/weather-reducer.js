import {FETCH_WEATHER} from './weather-actions';

export default function(state = [], action){
  //console.log('Action received', action);
  switch(action.type){
  case FETCH_WEATHER:
    return [...state, action.payload.data];
  }
  return state;
}
