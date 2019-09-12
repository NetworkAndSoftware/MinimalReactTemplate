import { combineReducers } from 'redux'
import dateReducer from 'reducers/dateReducer'
import weatherReducer from 'reducers/weatherReducer'
import {connectRouter } from 'connected-react-router'


const createRootReducer = (history) => combineReducers({
  'router': connectRouter(history),
  'date': dateReducer,
  'weather': weatherReducer
})

export default createRootReducer