import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import './app-main.css';

function AppMain() {
  return (
    <main className="main">
        <BurgerIngredients/>
        <BurgerConstructor/>
    </main>

  );
}

export default AppMain;