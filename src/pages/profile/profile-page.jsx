import styles from './profile-page.module.css';
import { NavLink, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ProfileInfo } from '../../components/profile-info/profile-info';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoThunk, logoutUserThunk, refreshTokenThunk } from '../../services/midleware/user-thunk';
import { useEffect } from 'react';
import { LoginPage } from '../login/login-page';

export function ProfilePage() {

  const dispatch = useDispatch()

  const checkActive = (to) => {
    return to ? to.isExact : false; 
  };

  const logout = () => {
    dispatch(logoutUserThunk())
  }

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
              {/* <NavLink to='/login' className={styles.menuLink} activeClassName={styles.activeLink} isActive={checkActive}>Выход</NavLink> */}
              <button type='button' className={styles.menuBtn} onClick={logout}>Выход</button>
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
          </Switch>     
        </div>

      </div>
    </Router>
  );
} 