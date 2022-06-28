import { useEffect, useRef, useState } from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotUserPasswordThunk } from '../../services/midleware/user-thunk';
import styles from './forgot-password-page.module.css';


export function ForgotPasswordPage() {

  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(store => store.userReducer);

  const [email, setEmail] = useState('');
  const inputEmailRef = useRef(null);
  
  const onButtonClick = (e) => {
    e.preventDefault();
    dispatch(forgotUserPasswordThunk(email));
  };

  useEffect(() => {
    if (user.forgotPass) {
      location.pathname = '/reset-password';
    }
  }, [user.forgotPass]);

  return (
    user.auth ? <Redirect to='/profile'/> :
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Восстановление пароля</h1>
        <form className={styles.form}>
          <Input
            type={'email'}
            placeholder={'E-mail'}
            onChange={e => setEmail(e.target.value)}
            icon={''}
            value={email}
            name={'email'}
            error={false}
            ref={inputEmailRef}
            onIconClick={'undefined'}
            errorText={'Ошибка'}
            size={'default'}
          />
          <Button type='primary' size='medium' onClick={onButtonClick}>
          Восстановить
          </Button>
          <p className={`${styles.text} mt-20`}>
            <span>Вспомнили пароль?</span>
            <span><Link className={styles.link} to='/login'>Войти</Link></span>
          </p>
        </form>
      </main>
  );
} 