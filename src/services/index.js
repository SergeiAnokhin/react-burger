import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root-reducer';
import { wsMiddleware } from './requests/ws-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    wsMiddleware('wss://norma.nomoreparties.space/orders/all')
  )
);
// const enhancer1 = composeEnhancers(wsMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
