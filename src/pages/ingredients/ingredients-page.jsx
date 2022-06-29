import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { ingredientId } from '../../services/actions/item-actions';
import styles from './ingredients-page.module.css';

export const IngredientPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const itemId = location.pathname.split('/').slice(-1)[0];
  useEffect(() => {
    dispatch(ingredientId(itemId));
  }, [dispatch, itemId]);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Детали ингредиента</h1>
      <IngredientDetails />
    </main>
  );
};
