import _ from 'lodash';
import { FETCHING_WEATHER } from './weather-actions';

const initialState = {
  weather: {
    city: '',
    country: '',
    weatherlist: [],
  },
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
  // console.log("in wr: ", action);

  switch (type) {
  case FETCHING_WEATHER:
    return _.mapKeys(action.payload.data, 'city');
  case FETCH_WEATHER_SUCCESS:
    return Object.assign({}, state, {
      city: action.data.city.name,
      country: action.data.city.country,
      weatherList: action.data.list
    });
  default:
    return state;
  }
}

export default function (state = weather, action) {
  switch (action.type) {
    case WEATHER_SUCCESS:
      return Object.assign({}, state, {
        city: action.data.city.name,
        country: action.data.city.country,
        weatherList: action.data.list
      });
    default:
      return state;
  }
}
