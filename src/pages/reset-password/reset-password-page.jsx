import styles from './reset-password-page.module.css';
import { useState, useRef } from 'react';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function ResetPasswordPage() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const inputNameRef = useRef(null)

  const onButtonClick = (e) => {
    e.preventDefault()
  }

  return (
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