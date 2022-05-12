import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app-main.module.css';
import PropTypes from 'prop-types';

function AppMain(props) {
  return (
    <main className={`${styles.main} pl-5 pr-5`}>
        <BurgerIngredients ingredientData={props.ingredientData} openModal={props.openIngredientModal}/>
        <BurgerConstructor openModal={props.openOrderModal}/>
    </main>

  );
}

AppMain.propTypes = {
  ingredientData: PropTypes.arrayOf(PropTypes.object).isRequired,
  openIngredientModal: PropTypes.func.isRequired,
  openOrderModal: PropTypes.func.isRequired
}

export default AppMain;