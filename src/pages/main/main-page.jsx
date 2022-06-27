import { useSelector } from 'react-redux';
import AppMain from '../../components/app-main/app-main';
import Modal from '../../components/modal/modal';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import OrderDetails from '../../components/order-details/order-details';
import { Preloader } from '../../components/preloader/preloader';

export function MainPage() {

  const user = useSelector(store => store.userReducer);
  const {ingredients, loading: isLoadingIngredients , error: hasErrorIngredients } = useSelector(state => state.ingredientsReducer);
  const isIngredientDetailsOpened = useSelector(store => store.itemReducer.open);
  const {loading: isLoadingOrder, error: hasErrorOrder, open: isOrderDetailsOpened } = useSelector(state => state.orderReducer);

  return (
        
    isLoadingIngredients || isLoadingOrder || user.loading
      ? <Preloader /> 
      :    
      <>    
        {!hasErrorIngredients && ingredients.length && <AppMain />} 
        {!hasErrorIngredients && isIngredientDetailsOpened && <Modal title='Детали ингредиента'><IngredientDetails /></Modal>}
        {!hasErrorOrder && isOrderDetailsOpened && <Modal title=''><OrderDetails /></Modal>}
      </>        
  );
} 