import{
  LOADING_LOCATION,
  LOADING_LOCATION_SUCCESS,
  LOADING_LOCATION_FAILED,
  CLEAR_LOCATION, 
  FOLLOWING_STATUS_UPDATE,
} from './actions.js';

const initialState = {
  loading: false,
  error: false,
  following: false,
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
  const {type} = action;
  
  switch (type){
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
      ...action.theLocation,
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

  case CLEAR_LOCATION: {
    return {
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
  }
  case FOLLOWING_STATUS_UPDATE: {
    return {
      ...state,
      following: action.following,
    };
  }

  default: {
    return state;
  }
  }
}