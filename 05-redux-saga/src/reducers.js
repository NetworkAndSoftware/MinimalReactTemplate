import { combineReducers } from 'redux'
import dateReducer from 'reducers/dateReducer'
import {connectRouter } from 'connected-react-router'


const createRootReducer = (history) => combineReducers({
  'router': connectRouter(history),
  'date': dateReducer
})

export default createRootReducer