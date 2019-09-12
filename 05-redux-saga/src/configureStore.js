import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from './reducers'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

export const history = createBrowserHistory()
export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      )
    )
  )

  return store
}