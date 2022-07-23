import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCookie } from '../../utils/cookie';

export const ProtectedRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state.userReducer);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        getCookie('token') && !user.error ? (
          children
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
