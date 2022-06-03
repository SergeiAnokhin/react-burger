import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsThunk } from '../../services/midleware/ingredients-thunk';

function App() {

  const dispatch = useDispatch()
  const isIngredientDetailsOpened = useSelector(store => store.itemReducer.isOpened)
  const isOrderDetailsOpened = useSelector(store => store.orderReducer.isOpened)

  useEffect(() => {
      dispatch(getIngredientsThunk())
  }, [])

  const data = useSelector(state => state.ingredientsReducer.ingredients)
  const isLoading = useSelector(state => state.ingredientsReducer.isLoading)
  const hasError = useSelector(state => state.ingredientsReducer.hasError)

    return (
      <>
        <AppHeader />        
        {!isLoading && !hasError && data.length && <AppMain />} 
        {isIngredientDetailsOpened && <Modal title="Детали ингредиента"><IngredientDetails /></Modal>}
        {isOrderDetailsOpened && <Modal title=""><OrderDetails /></Modal>}
      </>
    );
  }

export default App;
