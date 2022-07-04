import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { setIngredientsThunk } from '../../services/requests/ingredients-thunk';
import {
  getUserInfoThunk,
  refreshTokenThunk
} from '../../services/requests/user-thunk';
import {
  MainPage,
  ProfilePage,
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  FeedPage,
  IngredientPage,
  NotFoundPage,
  OrderPage
} from '../../pages';
import { ProtectedRoute } from '../ProtectedRoute/protected-route';
import { wsConnectionStart } from '../../services/actions/ws-actions';
import Modal from '../modal/modal';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state?.background;

  useEffect(() => {
    if (localStorage.getItem('token') && sessionStorage.getItem('token')) {
      dispatch(getUserInfoThunk());
    }
  }, [dispatch]);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setInterval(() => dispatch(refreshTokenThunk()), 300000);
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(setIngredientsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(wsConnectionStart('wss://norma.nomoreparties.space/orders/all'));
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/feed/:id">
          <OrderPage />
        </Route>
        <ProtectedRoute exact path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile/orders">
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPasswordPage />
        </Route>
        <Route path="/reset-password" exact>
          <ResetPasswordPage />
        </Route>
        <Route path="/ingredients/:id">
          <IngredientPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>

      {background && (
        <Route path="/ingredients/:id">
          <Modal title="Детали ингредиента">
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </>
  );
};

export default App;
