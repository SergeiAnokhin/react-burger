import styles from './navigation.module.css';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Navigation() {
  return (
    <nav className={`${styles.nav} pt-4 pr-0 pb-4 pl-0`}>
        <ul className={styles.list}>
            <li className={`${styles.link} mr-10`}>
                <a className={styles.link} href="/">
                    <BurgerIcon type="primary" />
                    <p className="text text_type_main-default pl-2">Конструктор</p>
                </a>
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