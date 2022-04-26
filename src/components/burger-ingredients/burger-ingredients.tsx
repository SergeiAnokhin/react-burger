import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientsList from '../ingredients-list/ingredients-list';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')
  const xxx = (value: string) => {
    console.log(value)
    document.querySelector('#ingredients')?.querySelector(`#${value}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
      <section className={`${styles.section} pt-10 mr-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={(value) => {setCurrent(value); xxx(value)}}>Булки</Tab>
          <Tab value="two" active={current === 'two'} onClick={(value) => {setCurrent(value); xxx(value)}}>Соусы</Tab>
          <Tab value="three" active={current === 'three'} onClick={(value) => {setCurrent(value); xxx(value)}}>Начинки</Tab>
        </div>
        <div className={`${styles.ingredients} mt-10`} id="ingredients">
          <IngredientsList name='Булки' type='bun' id='one' />
          <IngredientsList name='Соусы' type='sauce' id='two'/>
          <IngredientsList name='Начинка' type='main' id='three'/>
        </div>
      </section>
  );
}

export default BurgerIngredients;