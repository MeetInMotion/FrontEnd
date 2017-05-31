import axios from 'axios';

const API_KEY = '3301c5b3eb5119f400173a458088c41a';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
  const request = axios.get(`${ROOT_URL}&q=Stockholm,se`);

  console.log('Request:', request);//eslint-disable-line

  return{
    type: FETCH_WEATHER,
    payload: request,
  };
}
