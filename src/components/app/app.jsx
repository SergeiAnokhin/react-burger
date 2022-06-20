import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { setIngredientsThunk } from '../../services/midleware/ingredients-thunk';
import { Preloader } from '../preloader/preloader';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(setIngredientsThunk())
  }, [])

  const {ingredients, loading: isLoadingIngredients , error: hasErrorIngredients } = useSelector(state => state.ingredientsReducer)
  const isIngredientDetailsOpened = useSelector(store => store.itemReducer.open)
  const {loading: isLoadingOrder, error: hasErrorOrder, open: isOrderDetailsOpened } = useSelector(state => state.orderReducer)

    return (
      <>
        <AppHeader />
        {isLoadingIngredients || isLoadingOrder 
        ? <Preloader /> 
        :
        <>
        {!hasErrorIngredients && ingredients.length && <AppMain />} 
        {!hasErrorIngredients && isIngredientDetailsOpened && <Modal title="Детали ингредиента"><IngredientDetails /></Modal>}
        {!hasErrorOrder && isOrderDetailsOpened && <Modal title=""><OrderDetails /></Modal>}
        </>
        }
      </>
    );
  }

export default App;
