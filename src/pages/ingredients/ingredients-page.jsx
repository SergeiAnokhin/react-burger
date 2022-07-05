import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { Preloader } from '../../components/preloader/preloader';
import { ingredientId } from '../../services/actions/item-actions';
import styles from './ingredients-page.module.css';

export const IngredientPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { ingredients } = useSelector((store) => store.ingredientsReducer);
  const itemId = location.pathname.split('/').slice(-1)[0];

  useEffect(() => {
    dispatch(ingredientId(itemId));
  }, [dispatch, itemId]);

  return !ingredients.length ? (
    <Preloader />
  ) : (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Детали ингредиента</h1>
      <IngredientDetails />
    </main>
  );
};
