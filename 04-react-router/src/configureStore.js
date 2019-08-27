import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from './reducers'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhacers(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  )

  return store
}