import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { refreshTokenThunk } from '../../services/midleware/user-thunk';


export const ProtectedRoute = ({ children, ...rest }) => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem('token') && !user.error ? (
          children
        ) : sessionStorage.getItem('token') && user.error ? (
          dispatch(refreshTokenThunk())
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};