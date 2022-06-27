import styles from './reset-password-page.module.css';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { resetUserPasswordThunk } from '../../services/midleware/user-thunk';

export function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const inputTokenRef = useRef(null)

  const dispatch = useDispatch()
  const location = useLocation()
  const user = useSelector(store => store.userReducer)

  const onButtonClick = (e) => {
    e.preventDefault()
    dispatch(resetUserPasswordThunk({
      password: password,
      token: token
    }))
  }

    useEffect(() => {
      if (user.resetPass) {
        location.pathname = '/login'
      }
    }, [user.resetPass])

  return (
    !user.forgotPass && !user.auth ? 
      <Redirect to='/forgot-password'/> :
    user.auth ? 
      <Redirect to='/profile'/> :
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Восстановление пароля</h1>
      <form className={styles.form}>
        <PasswordInput 
          onChange={e => setPassword(e.target.value)}
          value={password}
          name={'password'}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={e => setToken(e.target.value)}
          icon={''}
          value={token}
          name={'token'}
          error={false}
          ref={inputTokenRef}
          onIconClick={'undefined'}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Button type="primary" size="medium" onClick={onButtonClick}>
          Сохранить
        </Button>
        <p className={`${styles.text} mt-20`}>
          <span>Вспомнили пароль?</span>
          <span><Link className={styles.link} to="/login">Войти</Link></span>
        </p>
      </form>
    </div>
  );
} 