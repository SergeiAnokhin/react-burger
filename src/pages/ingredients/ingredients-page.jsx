import styles from './ingredients-page.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIngredientsThunk } from '../../services/midleware/ingredients-thunk';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { Preloader } from '../../components/preloader/preloader';
import { useLocation } from 'react-router-dom';
import { ingredientId } from '../../services/actions/item-actions';

export function IngredientPage() {

    const dispatch = useDispatch()
    const location = useLocation()

    const itemId = location.pathname.split('/').slice(-1)[0]
    dispatch(ingredientId(itemId))

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Детали ингредиента</h1>
            <IngredientDetails/>
        </div>
        
    );
  } 