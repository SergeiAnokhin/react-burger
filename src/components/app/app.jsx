import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { setIngredientsThunk } from '../../services/requests/ingredients-thunk';
import { getUserInfoThunk, refreshTokenThunk } from '../../services/requests/user-thunk';
import { MainPage, ProfilePage, ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage, FeedPage, IngredientPage, NotFoundPage } from '../../pages';
import { ProtectedRoute } from '../ProtectedRoute/protected-route';
import Modal from '../modal/modal';

function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state?.background;

  useEffect(() => {
    if (localStorage.getItem('token') && sessionStorage.getItem('token')) {
      dispatch(getUserInfoThunk());
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setInterval(() => dispatch(refreshTokenThunk()), 300000);
    }
  }, []);

  useEffect(() => {
    dispatch(setIngredientsThunk());
  }, []);

  return (
    <>
      <AppHeader />  
      <Switch location={background || location}>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/feed'>
          <FeedPage />
        </Route>
        <ProtectedRoute exact path='/profile'>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute exact path='/profile/orders'>
          <ProfilePage />
        </ProtectedRoute>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
        <Route path='/register' exact>
          <RegisterPage />
        </Route>
        <Route path='/forgot-password' exact>
          <ForgotPasswordPage />
        </Route>
        <Route path='/reset-password' exact>
          <ResetPasswordPage />
        </Route>
        <Route path='/ingredients/:id'>
          <IngredientPage />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>

      {background && (
        <Route
          path='/ingredients/:id'
          children={
            <Modal title='Детали ингредиента'><IngredientDetails /></Modal>
          }
        />
      )}
    </>
  );
}

export default App;
