import { useRef, useState } from 'react';
import styles from './login-page.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputEmailRef = useRef(null)

  const onButtonClick = (e) => {
    e.preventDefault()
  }
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Вход</h1>
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
        <PasswordInput 
          onChange={e => setPassword(e.target.value)}
          value={password}
          name={'password'}
        />
        <Button type="primary" size="medium" onClick={onButtonClick}>
          Войти
        </Button>
        <p className={`${styles.text} mt-20`}>
          <span>Вы — новый пользователь?</span>
          <span><Link className={styles.link} to="/register">Зарегистрироваться</Link></span>
        </p>
        <p className={styles.text}>
          <span>Забыли пароль?</span>
          <span><Link className={styles.link} to="/forgot-password">Восстановить пароль</Link></span>
        </p>
      </form>
    </div>
  );
} 