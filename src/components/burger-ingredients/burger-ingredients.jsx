import React, { useRef, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientsList from '../ingredients-list/ingredients-list';

function BurgerIngredients() {

  const initialHeight = document.documentElement.clientHeight/2 < 500 ? document.documentElement.clientHeight/2 : 500
  const [current, setCurrent] = React.useState('bun')
  const [bunTop, setBunTop] = React.useState(initialHeight)
  const [sauceTop, setSauceTop] = React.useState(initialHeight)
  const [mainTop, setMainTop] = React.useState(initialHeight)
  const ref = useRef()

  const bun = 'bun'
  const sauce = 'sauce'
  const main = 'main'

  const scrollTo = (value) => {
    ref.current.children[value].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  useEffect(() => {
    const items = [...ref.current.children]
    ref.current.addEventListener('scroll', (e) => {
        items.forEach((item) => {
          if (item.id === bun) {setBunTop(item.getBoundingClientRect().top)}
          if (item.id === sauce) {setSauceTop(item.getBoundingClientRect().top)}
          if (item.id === main) {setMainTop(item.getBoundingClientRect().top)}
        })
    })
}, [])

  useEffect(() => {
    if (mainTop < initialHeight) {setCurrent(main)}
    else if (sauceTop < initialHeight) {setCurrent(sauce)}
    else if (bunTop < initialHeight) {setCurrent(bun)}
  }, [bunTop, sauceTop, mainTop, initialHeight])

  return (
      <section className={`${styles.section} pt-10 mr-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className={styles.tabs}>
          <Tab value={bun} active={current === bun} onClick={(value) => {setCurrent(value); scrollTo(value)}}>Булки</Tab>
          <Tab value={sauce} active={current === sauce} onClick={(value) => {setCurrent(value); scrollTo(value)}}>Соусы</Tab>
          <Tab value={main} active={current === main} onClick={(value) => {setCurrent(value); scrollTo(value)}}>Начинки</Tab>
        </div>
        <div className={`${styles.ingredients} mt-10`} id="ingredients" ref={ref}>
          <IngredientsList name='Булки' type={bun} id={bun} />
          <IngredientsList name='Соусы' type={sauce} id={sauce} />
          <IngredientsList name='Начинка' type={main} id={main} />
        </div>
      </section>
  );
}

export default BurgerIngredients;