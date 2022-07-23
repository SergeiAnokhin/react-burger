import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root-reducer';
import { wsMiddleware } from './requests/ws-thunk';
import { URL_GET_ORDERS } from './requests/api';
import { wsActions } from './actions/ws-actions';
import { wsUserActions } from './actions/ws-user-actions';

const composeEnhancers =
  typeof window === 'object' &&
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    wsMiddleware(`${URL_GET_ORDERS}/all`, wsActions),
    wsMiddleware(URL_GET_ORDERS, wsUserActions)
  )
);

export const store = createStore(rootReducer, enhancer);
