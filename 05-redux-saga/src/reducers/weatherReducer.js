import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from '../actions'

const weatherReducer = (state = {}, action) => {
  console.log('weatherReducer')
  switch (action.type) {
  case GET_WEATHER:
    return { ...state, loading: true }
  case GET_WEATHER_SUCCESS:
    return { ...state, forecast: {...action.data}, loading: false }
  case GET_WEATHER_FAILURE:
    return { ...state, forecast: {}, error: {...action.error}, loading: false }
  default:
    return state
  }
}

export default weatherReducer