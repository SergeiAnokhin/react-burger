import styles from './navigation.module.css';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className={`${styles.nav} pt-4 pr-0 pb-4 pl-0`}>
        <ul className={styles.list}>
            <li className={`${styles.link} mr-10`}>
                <Link className={styles.link} to="/">
                    <BurgerIcon type="primary" />
                    <p className="text text_type_main-default pl-2">Конструктор</p>
                </Link>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="/">
                    <ListIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default Navigation;