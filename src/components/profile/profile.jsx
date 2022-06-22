import styles from './profile.module.css';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';

function Profile() {

  const location = useLocation();

  return (
    <NavLink className={styles.link} to="/login">
            <ProfileIcon type={location.pathname === '/login' ? 'primary' : 'secondary'} />
            <p className={`text text_type_main-default pl-2 ${location.pathname === '/login' ? '' : 'text_color_inactive'}`}>Личный кабинет</p>
    </NavLink>
  );
}

export default Profile;