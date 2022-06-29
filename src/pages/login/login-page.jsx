import { useEffect, useRef, useState } from 'react';
import {
  Input,
  Button,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../services/requests/user-thunk';
import { Preloader } from '../../components/preloader/preloader';
import styles from './login-page.module.css';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('Вход');
  const inputEmailRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      loginUserThunk({
        email: email,
        password: password
      })
    );
  };

  useEffect(() => {
    if (user.error) {
      setTitle('Неверный логин или пароль');
    }
  }, [user.error]);

  return sessionStorage.getItem('token') &&
    localStorage.getItem('token') &&
    !user.loading &&
    user.auth ? (
    <Redirect
      to={history.location.state ? history.location.state.from.pathname : '/'}
    />
  ) : sessionStorage.getItem('token') &&
    localStorage.getItem('token') &&
    user.loading ? (
    <Preloader />
  ) : (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={(e) => setEmail(e.target.value)}
          icon={''}
          value={email}
          name={'email'}
          error={false}
          ref={inputEmailRef}
          onIconClick={'undefined'}
          errorText={'Ошибка'}
          size={'default'}
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={'password'}
        />
        <Button type="primary" size="medium">
          Войти
        </Button>
        <p className={`${styles.text} mt-20`}>
          <span>Вы - новый пользователь?</span>
          <span>
            <Link className={styles.link} to="/register">
              Зарегистрироваться
            </Link>
          </span>
        </p>
        <p className={styles.text}>
          <span>Забыли пароль?</span>
          <span>
            <Link className={styles.link} to="/forgot-password">
              Восстановить пароль
            </Link>
          </span>
        </p>
      </form>
    </main>
  );
};
