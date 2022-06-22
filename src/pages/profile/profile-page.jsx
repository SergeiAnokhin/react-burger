import styles from './profile-page.module.css';
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProfileInfo } from '../../components/profile-info/profile-info';

export function ProfilePage() {

  const checkActive = (to) => {
    return to ? to.isExact : false; 
  };

  return (
    <Router>
      <div className={styles.wrapper}>

        {/* Меню личного кабинета */}
        <div className={styles.profileMenu}>
          <ul className={styles.menuItems}>
            <li className={styles.menuItem}>
              <NavLink to='/profile' className={styles.menuLink} activeClassName={styles.activeLink} isActive={checkActive}>Профиль</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to='/profile/orders' className={styles.menuLink} activeClassName={styles.activeLink} isActive={checkActive}>История заказов</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to='/profile/exit' className={styles.menuLink} activeClassName={styles.activeLink} isActive={checkActive}>Выход</NavLink>
            </li>
          </ul>
          <p className={styles.menuText}>В этом разделе вы можете изменить свои персональные данные</p>
        </div>

        {/* Контент контент личного кабинета */}
        <div className={styles.profileContent}>
          <Switch>
            <Route exact path="/profile">
              <ProfileInfo/>
            </Route>
            <Route exact path="/profile/orders">
              <h1 className={styles.historyTitle}>Здесь будет компонент с историей заказов.</h1>
            </Route>
            <Route exact path="/profile/exit">
              <h2 className={styles.exitTitle}>Этой страницы не будет, будет просто разлогирование по нажатию на "Выход".</h2>
            </Route>
          </Switch>     
        </div>

      </div>
    </Router>
  );
} 