import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app-main.module.css';

function AppMain() {
  return (
    <main className={`${styles.main} pl-5 pr-5`}>
        <BurgerIngredients/>
        <BurgerConstructor/>
    </main>

  );
}

export default AppMain;