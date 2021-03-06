import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Input,
  Button,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { resetUserPasswordThunk } from '../../services/requests/user-thunk';
import styles from './reset-password-page.module.css';

export const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const inputTokenRef = useRef(null);

  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer);

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      resetUserPasswordThunk({
        password: password,
        token: token
      })
    );
  };

  return !user.forgotPass && !user.auth ? (
    <Redirect to="/forgot-password" />
  ) : user.resetPass ? (
    <Redirect to="/login" />
  ) : user.auth ? (
    <Redirect to="/profile" />
  ) : (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Восстановление пароля</h1>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={'password'}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={(e) => setToken(e.target.value)}
          icon={''}
          value={token}
          name={'token'}
          error={false}
          ref={inputTokenRef}
          onIconClick={'undefined'}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Button type="primary" size="medium">
          Сохранить
        </Button>
        <p className={`${styles.text} mt-20`}>
          <span>Вспомнили пароль?</span>
          <span>
            <Link className={styles.link} to="/login">
              Войти
            </Link>
          </span>
        </p>
      </form>
    </main>
  );
};
