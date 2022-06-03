import { useMemo } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredient } from '../../services/actions/constructor-actions';
import { getOrderThunk } from '../../services/midleware/order-thunk';

function BurgerConstructor() {

  const bun = useSelector(store => store.constructorReducer.bun)
  const ingredients = useSelector(store => store.constructorReducer.ingredients)
  const data = useSelector(store => store.constructorReducer.allIngredientsId)
  const dispatch = useDispatch()

  const price = useMemo(() => {
    const bunPrice = bun.length > 0 ? bun[0].price * 2 : 0
    const ingredientsPrice = ingredients.length > 0 ? ingredients.reduce((s, v) => s + v.price, 0) : 0
    return bunPrice + ingredientsPrice
  }, [bun, ingredients]);  

  const getOrder = () => {
    dispatch(getOrderThunk(data))
  }

  return (
      <section className={`${styles.section} pt-25 pl-4 pr-4`}>
        { bun.length === 0 && ingredients.length === 0 
        ? <div className={styles.text}>Добавьте ингредиенты</div>
        :<>
          <div className={styles.bun}>
            {bun.length > 0 ? <ConstructorElement type="top" isLocked={true} text={bun[0].name} price={bun[0].price} thumbnail={bun[0].image} /> : null}
          </div>
          <div className={styles.elements}>
            {ingredients.map((elem, index) =>
            elem.type === 'main' ?
            <div key={elem._id} className={styles.element}>
              <DragIcon type="primary" />
              <ConstructorElement text={elem.name} price={elem.price} thumbnail={elem.image_mobile} handleClose={() => dispatch(deleteIngredient(elem._id))} />
            </div> :
            elem.type === 'sauce' &&
            <div key={elem._id} className={styles.element}>
              <DragIcon type="primary" />
              <ConstructorElement text={elem.name} price={elem.price} thumbnail={elem.image_mobile} handleClose={() => dispatch(deleteIngredient(elem._id))} />
            </div>
            )}
          </div>
          <div className={styles.bun}>
            {bun.length > 0 ? <ConstructorElement type="bottom" isLocked={true} text={bun[0].name} price={bun[0].price} thumbnail={bun[0].image} /> : null}
          </div>
        </>}
        <>
          <div className={`${styles.info} pr-4`}>
            <p className="text text_type_digits-medium mr-10"><span className='mr-2'>{price}</span><CurrencyIcon type="primary"/></p>
            <Button type="primary" size="large" onClick={getOrder}>Оформить заказ</Button>
          </div>
        </>
      </section>
  );
}

export default BurgerConstructor;