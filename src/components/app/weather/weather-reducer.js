// import _ from 'lodash';
// import { FETCHING_WEATHER } from './weather-actions';

const initialState = {
  weather: {},
};

// export default function(state = [], action){
//   //console.log('Action received', action);
//   switch(action.type){
//   case FETCH_WEATHER:
//     //return _.mapKeys(action.payload.data, 'city');
//     return [action.payload.data, ...state];


export default function(state = initialState, action) {  
  // const type = action.type;
  const type = action.type;

  switch (type) {
  // case FETCHING_WEATHER: 
    // return [
    //   action.payload.data, ...state];

  default:
    return state;
  }
}
