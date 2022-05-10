import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app-main.module.css';

function AppMain(props: {ingredientData: any; openIngredientModal: any; openOrderModal: any}) {
  return (
    <main className={`${styles.main} pl-5 pr-5`}>
        <BurgerIngredients ingredientData={props.ingredientData} openModal={props.openIngredientModal}/>
        <BurgerConstructor openModal={props.openOrderModal}/>
    </main>

  );
}

export default AppMain;