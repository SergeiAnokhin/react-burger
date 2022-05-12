import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientsList from '../ingredients-list/ingredients-list';
import PropTypes from 'prop-types';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('bun')
  const scrollTo = (value) => {
    document.querySelector('#ingredients')?.querySelector(`#${value}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
      <section className={`${styles.section} pt-10 mr-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className={styles.tabs}>
          <Tab value="bun" active={current === 'bun'} onClick={(value) => {setCurrent(value); scrollTo(value)}}>Булки</Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={(value) => {setCurrent(value); scrollTo(value)}}>Соусы</Tab>
          <Tab value="main" active={current === 'main'} onClick={(value) => {setCurrent(value); scrollTo(value)}}>Начинки</Tab>
        </div>
        <div className={`${styles.ingredients} mt-10`} id="ingredients">
          <IngredientsList name='Булки' type='bun' id='bun' ingredientData={props.ingredientData} openModal={props.openModal} />
          <IngredientsList name='Соусы' type='sauce' id='sauce' ingredientData={props.ingredientData} openModal={props.openModal}/>
          <IngredientsList name='Начинка' type='main' id='main' ingredientData={props.ingredientData} openModal={props.openModal}/>
        </div>
      </section>
  );
}

BurgerIngredients.propTypes = {
  ingredientData: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired
}

export default BurgerIngredients;