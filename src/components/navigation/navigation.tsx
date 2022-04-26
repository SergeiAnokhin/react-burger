import './navigation.css';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Navigation() {
  return (
    <nav className="nav pt-4 pr-0 pb-4 pl-0">
        <ul className="nav-list">
            <li className="nav-item mr-10">
                <a className="nav-link" href="/">
                    <BurgerIcon type="primary" />
                    <p className="text text_type_main-default pl-2">Конструктор</p>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <ListIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default Navigation;