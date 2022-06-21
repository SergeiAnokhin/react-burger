import styles from './register-page.module.css';
import { useRef, useState } from 'react';
import { Input, Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputNameRef = useRef(null)
  const inputEmailRef = useRef(null)

  const onButtonClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form}>
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
        <Button type="primary" size="medium" onClick={onButtonClick}>
          Зарегистрироваться
        </Button>
        <p className={`${styles.text} mt-20`}>
          <span>Уже зарегистрированы?</span>
          <span><Link className={styles.link} to="/login">Войти</Link></span>
        </p>
      </form>
    </div>
  );
} 