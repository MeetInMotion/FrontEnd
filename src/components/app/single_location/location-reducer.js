import{
  LOADING_LOCATION,
  LOADING_LOCATION_SUCCESS,
  LOADING_LOCATION_FAILED,
} from './actions';

const initialState = {
  loading: false,
  error: false,
  id: null,
  name: null,
  description: null,
  img_url: null,
  coordinates: {
    "east": null,
    "north": null,
  },
};

export default function locationReducer(state=initialState, action){
  switch (action.type){
  
  case LOADING_LOCATION: {
    return {...state,
      loading: true,
      error: false,
    };
  }
  case LOADING_LOCATION_SUCCESS: {
    return {
      ...state,
      loading: false,
      error: false,
      ...action.payload,
    };
  }
  case LOADING_LOCATION_FAILED: {
    return {
      ...state,
      loading: false,
      error: true,
      message: action.payload,
    };
  }
  default: {
    return state;
  }
  }
}
