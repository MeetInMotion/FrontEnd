import axios from 'axios';

const API_KEY = '3301c5b3eb5119f400173a458088c41a';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;//us is the country code, need to get sweden country code
  //make an ajax Promise request, this is a redux promise which use axios for ajax
  const request = axios.get(url);

  console.log('Request:', request);//eslint-disable-line

  return{
    type: FETCH_WEATHER,
    payload: request,
  };
}
