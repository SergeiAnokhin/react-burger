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

  useEffect(() => {
      dispatch(getIngredientsThunk())
  }, [])

  const data = useSelector(state => state.ingredientsReducer.ingredients)
  const isLoadingIngredients = useSelector(state => state.ingredientsReducer.isLoading)
  const hasErrorIngredients = useSelector(state => state.ingredientsReducer.hasError)
  const isLoadingOrder = useSelector(state => state.orderReducer.isLoading)
  const hasErrorOrder = useSelector(state => state.orderReducer.hasError)
  const isIngredientDetailsOpened = useSelector(store => store.itemReducer.isOpened)
  const isOrderDetailsOpened = useSelector(store => store.orderReducer.isOpened)

    return (
      <>
        <AppHeader />        
        {!isLoadingIngredients && !hasErrorIngredients && data.length && <AppMain />} 
        {!isLoadingIngredients && !hasErrorIngredients && isIngredientDetailsOpened && <Modal title="Детали ингредиента"><IngredientDetails /></Modal>}
        {!isLoadingOrder && !hasErrorOrder && isOrderDetailsOpened && <Modal title=""><OrderDetails /></Modal>}
      </>
    );
  }

export default App;
