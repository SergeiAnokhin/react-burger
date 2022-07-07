import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root-reducer';
import { wsMiddleware } from './requests/ws-thunk';
import { wsUserMiddleware } from './requests/ws-user-thunk';
import { URL_GET_ORDERS } from './requests/api';

const composeEnhancers =
  typeof window === 'object' &&
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    wsMiddleware(`${URL_GET_ORDERS}/all`),
    wsUserMiddleware(
      `${URL_GET_ORDERS}?token=${
        sessionStorage.getItem('token').split('Bearer ')[1]
      }`
    )
  )
);

export const store = createStore(rootReducer, enhancer);
