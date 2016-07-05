import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
///import { ping } from '../enhancers/ping'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
  const logger = createLogger()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger))
// если происходят изменения в редюсере мы его обновляем
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }


  return store
}