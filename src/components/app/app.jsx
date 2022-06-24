import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { setIngredientsThunk } from '../../services/midleware/ingredients-thunk';
import { getUserInfoThunk, refreshTokenThunk } from '../../services/midleware/user-thunk';
import { Preloader } from '../preloader/preloader';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ProfilePage, ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage, FeedPage } from '../../pages';

function App() {

  const dispatch = useDispatch()
  const user = useSelector(store => store.userReducer)

  const {ingredients, loading: isLoadingIngredients , error: hasErrorIngredients } = useSelector(state => state.ingredientsReducer)
  const isIngredientDetailsOpened = useSelector(store => store.itemReducer.open)
  const {loading: isLoadingOrder, error: hasErrorOrder, open: isOrderDetailsOpened } = useSelector(state => state.orderReducer)

  useEffect(() => {
    dispatch(getUserInfoThunk())
    dispatch(setIngredientsThunk())
}, [])

useEffect(() => {
  if (user.error) {
    console.log('надо обновить токен')
    dispatch(refreshTokenThunk())
  }
}, [user.error])

    return (
      <Router>
        <AppHeader />
        {isLoadingIngredients || isLoadingOrder || user.loading
        ? <Preloader /> 
        :        
          <Switch>
            <Route exact path="/">
              {!hasErrorIngredients && ingredients.length && <AppMain />} 
              {!hasErrorIngredients && isIngredientDetailsOpened && <Modal title="Детали ингредиента"><IngredientDetails /></Modal>}
              {!hasErrorOrder && isOrderDetailsOpened && <Modal title=""><OrderDetails /></Modal>}
            </Route>
            <Route exact path="/feed">
              <FeedPage />
            </Route>
            <Route exact path="/profile">
            {!sessionStorage.getItem('token') ? <Redirect to="/login" /> : <ProfilePage />}
            </Route>
            <Route exact path="/profile/orders">
              <ProfilePage />
            </Route>
            <Route exact path="/profile/exit">
              <ProfilePage />
            </Route>
            <Route path="/login" exact>
            {sessionStorage.getItem('token') ? <Redirect to="/" /> : <LoginPage />}
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
          </Switch>    
        }
      </Router>
    );
  }

export default App;
