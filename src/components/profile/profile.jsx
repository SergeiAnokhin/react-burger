import styles from './profile.module.css';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
  return (
    <a className={styles.link} href="/">
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</p>
    </a>
  );
}

export default Profile;