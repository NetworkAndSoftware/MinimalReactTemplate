import { UPDATE_DATETIME, GET_WEATHER } from './actions'

export function updateDateTime(datetime) {
  return { type: UPDATE_DATETIME, datetime }
}

export function getWeather(){
  console.log('getweather')
  return { type: GET_WEATHER }
}