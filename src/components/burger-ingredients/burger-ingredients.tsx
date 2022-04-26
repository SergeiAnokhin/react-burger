import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientsList from '../ingredients-list/ingredients-list';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')
  return (
      <section className={`${styles.section} pt-10 mr-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>Булки</Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>Начинки</Tab>
        </div>
        <div className={styles.ingredients}>
          <IngredientsList name='Булки' type='bun' />
          <IngredientsList name='Соусы' type='sauce' />
          <IngredientsList name='Начинка' type='main' />
        </div>
      </section>
  );
}

export default BurgerIngredients;