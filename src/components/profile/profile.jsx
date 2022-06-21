import styles from './profile.module.css';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <Link className={styles.link} to="/login">
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</p>
    </Link>
  );
}

export default Profile;