import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { dateReducer} from './reducers'

const allReducers = combineReducers({
  'date': dateReducer
})

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enable Firefox Redux Devtools Extension
)
export default store
