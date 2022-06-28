import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { registrationUserThunk } from '../../services/midleware/user-thunk';
import styles from './register-page.module.css';

export function RegisterPage() {

  const dispatch = useDispatch();
  const user = useSelector(store => store.userReducer);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(registrationUserThunk({
      'email': email, 
      'password': password, 
      'name': name 
    }));
  };

  return (
    user.auth ? 
      <Redirect to='/login'/> :
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Регистрация</h1>
        <form className={styles.form} onSubmit={onSubmitForm}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setName(e.target.value)}
            icon={''}
            value={name}
            name={'name'}
            error={false}
            ref={inputNameRef}
            onIconClick={'undefined'}
            errorText={'Ошибка'}
            size={'default'}
          />
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
          <PasswordInput 
            onChange={e => setPassword(e.target.value)}
            value={password}
            name={'password'}
          />
          <Button type='primary' size='medium'>
          Зарегистрироваться
          </Button>
          <p className={`${styles.text} mt-20`}>
            <span>Уже зарегистрированы?</span>
            <span><Link className={styles.link} to='/login'>Войти</Link></span>
          </p>
        </form>
      </main>
  );
} 