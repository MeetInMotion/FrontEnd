import { FETCHING_WEATHER } from './weather-actions';

const initialState = {
  weather: {},
};

export default function(state = initialState, action) {  
  // const type = action.type;
  const {type, ...rest} = action;


  // console.log("in wr: ", action);

  switch (type) {
  case FETCHING_WEATHER: 
    return {
      ...state,
      ...rest,
    };
  default:
    return state;
  }
}
