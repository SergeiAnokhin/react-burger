import { NavLink, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileInfo } from '../../components/profile-info/profile-info';
import { logoutUserThunk } from '../../services/requests/user-thunk';
import { ProtectedRoute } from '../../components/ProtectedRoute/protected-route';
import { Preloader } from '../../components/preloader/preloader';
import styles from './profile-page.module.css';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer);

  const checkActive = (to) => (to ? to.isExact : false);

  const logout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.profileMenu}>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <NavLink
              to="/profile"
              className={styles.menuLink}
              activeClassName={styles.activeLink}
              isActive={checkActive}
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/profile/orders"
              className={styles.menuLink}
              activeClassName={styles.activeLink}
              isActive={checkActive}
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/login"
              className={styles.menuLink}
              activeClassName={styles.activeLink}
              isActive={checkActive}
              onClick={logout}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={styles.menuText}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <div className={styles.profileContent}>
        <Switch>
          <ProtectedRoute exact path="/profile">
            {!user.name ? <Preloader /> : <ProfileInfo />}
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile/orders">
            <h1 className={styles.historyTitle}>
              Здесь будет компонент с историей заказов.
            </h1>
          </ProtectedRoute>
        </Switch>
      </div>
    </main>
  );
};
