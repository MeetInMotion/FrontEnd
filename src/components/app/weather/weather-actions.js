import axios from 'axios';

const API_KEY = '3301c5b3eb5119f400173a458088c41a';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCHING_WEATHER = 'FETCHING_WEATHER';
export function fetchWeather(city) {
  return function(dispatch) {
    return dispatch({
      type: FETCHING_WEATHER,
      payload: axios.create({}).request({
        method: 'get',
        url: `${ROOT_URL}&q=${city},se`,
        params: {},
      }),
    });
  };
}
// export function fetchingWeather(promise) {
//   return {
//     type: FETCHING_WEATHER,
//     payload: promise,
//   };
// }



// export function fetchWeather(city) {
//   return function(dispatch) {
//     const request = axios.get(`${ROOT_URL}&q=${city},se`);
//     console.log('Request from promise:', request);//eslint-disable-line
//     dispatch(fetchingWeather(request));
//   };
// }