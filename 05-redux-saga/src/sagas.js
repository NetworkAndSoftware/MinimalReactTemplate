import { call, put, all, takeLatest } from 'redux-saga/effects'
import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from './actions'
import Axios from 'axios'

/*eslint require-yield: off*/
export function* helloSaga() {
  console.log('hello sagas')
}

function* getWeatherSaga() {
  try {
    // see http://ip-api.com/docs/api:json
    const geoJson = yield call(Axios.get, 'http://ip-api.com/json/')
    // https://www.weather.gov/documentation/services-web-api
    const pointsJson = yield call(Axios.get, `https://api.weather.gov/points/${geoJson.data.lat},${geoJson.data.lon}`)
    const forecastJson = yield call(Axios.get, pointsJson.data.properties.forecast)
    yield put({ type: GET_WEATHER_SUCCESS, data: forecastJson.data })
  } catch (error) {
    yield put({ type: GET_WEATHER_FAILURE, error: error })
  }
}

function* watchWeather() {
  console.log('watchWeather')
  yield takeLatest(GET_WEATHER, getWeatherSaga)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchWeather()
  ])
}