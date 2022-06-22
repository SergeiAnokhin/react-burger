import styles from './profile-info.module.css';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

export function ProfileInfo() {

  const [name, setName] = useState('Сергей')
  const [email, setEmail] = useState('user@mail.ru')
  const [password, setPassword] = useState('123456')

  const [editName, setEditName] = useState(true)
  const [editEmail, setEditEmail] = useState(true)
  const [editPassword, setEditPassword] = useState(true)

  const inputNameRef = useRef(null)
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)

  const onNameEditClick = () => {
      setEditName(false)
      setTimeout(() => inputNameRef.current.focus(), 0)
  }

  const onEmailEditClick = () => {
    setEditEmail(false)
    setTimeout(() => inputEmailRef.current.focus(), 0)
  }

  const onPasswordEditClick = () => {
    setEditPassword(false)
    setTimeout(() => inputPasswordRef.current.focus(), 0)
  }

  useEffect(() => {
      inputNameRef.current.addEventListener('blur', () => {
        setEditName(true)
      })
  }, [editName])

  useEffect(() => {
    inputEmailRef.current.addEventListener('blur', () => {
      setEditEmail(true)
    })
  }, [editEmail])

    useEffect(() => {
    inputPasswordRef.current.addEventListener('blur', () => {
        setEditPassword(true)
    })
    }, [editPassword])

  return (
    <form className={styles.form}>
        <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setName(e.target.value)}
            icon={'EditIcon'}
            value={name}
            name={'name'}
            error={false}
            ref={inputNameRef}
            onIconClick={onNameEditClick}
            errorText={'Ошибка'}
            size={'default'}
            disabled={editName}
        />
        <Input
            type={'email'}
            placeholder={'Логин'}
            onChange={e => setEmail(e.target.value)}
            icon={'EditIcon'}
            value={email}
            name={'email'}
            error={false}
            ref={inputEmailRef}
            onIconClick={onEmailEditClick}
            errorText={'Ошибка'}
            size={'default'}
            disabled={editEmail}
        />
        <Input
            type={'password'}
            placeholder={'Пароль'}
            onChange={e => setPassword(e.target.value)}
            icon={'EditIcon'}
            value={password}
            name={'password'}
            error={false}
            ref={inputPasswordRef}
            onIconClick={onPasswordEditClick}
            errorText={'Ошибка'}
            size={'default'}
            disabled={editPassword}
        />
    </form>
  );
} 