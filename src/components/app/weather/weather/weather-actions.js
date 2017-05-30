/* epi 54, 57 with Ajax, to load weather data will need to change the weather state, this means need to create an action
this action create will
openweathermap API key
*/
import axios from 'axios';

const API_KEY = '3301c5b3eb5119f400173a458088c41a';
//api key 3301c5b3eb5119f400173a458088c41a
//epi 56 apply the middleware by using the redux-promise
//const ROOT_URL='http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
//this is ES6 template string syntax
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//FETCH_WEATHER is a variable and we assign it to the type and export this variable,
//assign the string to the variable above instead of having the type below
//this is to keep the action type be consistent with the reducer to handle this action type
// it is a convention where the type of action is the same word for the action type

export function fetchWeather(city){
  //action creator, an action is an object that needs to have a type,
  //city is the city id from weather map

  const url = `${ROOT_URL}&q=${city},us`;//us is the country code, need to get sweden country code
  //make an ajax Promise request, this is a redux promise which use axios for ajax
  const request = axios.get(url);
  //request to the backend api of weathermap by using ajax Promise
  //need the request for passing payload
  //ajax is asynchonous call

  //epi 59 to see what is request payload
  console.log('Request:', request);//eslint-disable-line

  return{
    type: FETCH_WEATHER,
    //use the variable
    payload: request,
    //payload will be kicked off
    //epi59, need to use what the payload is passing the values

  };
}


//make an api request, it is like making a ajax get request
