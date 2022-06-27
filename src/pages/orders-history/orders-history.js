import { NavLink } from 'react-router-dom';
import styles from './orders-history.module.css';

export function OrdersHistoryPage() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.profileMenu}>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}><NavLink to='/profile' className={styles.menuLink} activeClassName={styles.activeLink}>Профиль</NavLink></li>
          <li className={styles.menuItem}><NavLink to='/profile/orders' className={styles.menuLink} activeClassName={styles.activeLink}>История заказов</NavLink></li>
          <li className={styles.menuItem}><NavLink to='/profile/exit' className={styles.menuLink} activeClassName={styles.activeLink}>Выход</NavLink></li>
        </ul>
        <p className={styles.menuText}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <div className={styles.profileContent}>
        <h1>OrdersHistoryPage</h1>
      </div>
    </div>
  );
} 