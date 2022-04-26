import './profile.css';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
  return (
    <a className="profile-link" href="/">
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</p>
    </a>
  );
}

export default Profile;