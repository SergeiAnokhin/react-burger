import styles from './navigation.module.css';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {

const location = useLocation()

  return (
    <nav className={`${styles.nav} pt-4 pr-0 pb-4 pl-0`}>
        <ul className={styles.list}>
            <li className={`${styles.link} mr-10`}>
                <NavLink className={styles.link} to="/">
                    <BurgerIcon type={location.pathname === '/' ? 'primary' : 'secondary'} />
                    <p className={`text text_type_main-default pl-2 ${location.pathname === '/' ? '' : 'text_color_inactive'}`}>Конструктор</p>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink className={styles.link} to="/profile/orders">
                    <ListIcon type={location.pathname === '/profile/orders' ? 'primary' : 'secondary'} />
                    <p className={`text text_type_main-default pl-2 ${location.pathname === '/profile/orders' ? '' : 'text_color_inactive'}`}>Лента заказов</p>
                </NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Navigation;