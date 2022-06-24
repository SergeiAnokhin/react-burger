import styles from './profile-info.module.css';
import { useEffect, useRef, useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';


export function ProfileInfo() {

  const user = useSelector(store => store.userReducer)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState('')

  const [editName, setEditName] = useState(true)
  const [editEmail, setEditEmail] = useState(true)
  const [editPassword, setEditPassword] = useState(true)

  const [inputNameIcon, setInputNameIcon] = useState('EditIcon')
  const [inputEmailIcon, setInputEmailIcon] = useState('EditIcon')
  const [inputPasswordIcon, setInputPasswordIcon] = useState('EditIcon')

  const inputNameRef = useRef(null)
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)

  const onNameEditClick = () => {
    if (inputNameIcon === 'EditIcon') {
      setInputNameIcon('CheckMarkIcon')
      setEditName(false)
      setTimeout(() => inputNameRef.current.focus(), 0)
    }
    if (inputNameIcon === 'CheckMarkIcon') {
      setInputNameIcon('EditIcon')
    }
  }

  const onEmailEditClick = () => {
    if (inputEmailIcon === 'EditIcon') {
      setInputEmailIcon('CheckMarkIcon')
      setEditEmail(false)
      setTimeout(() => inputEmailRef.current.focus(), 0)
    }
    if (inputEmailIcon === 'CheckMarkIcon') {
      setInputEmailIcon('EditIcon')
    }
  }

  const onPasswordEditClick = () => {
    if (inputPasswordIcon === 'EditIcon') {
      setInputPasswordIcon('CheckMarkIcon')
      setEditPassword(false)
      setTimeout(() => inputPasswordRef.current.focus(), 0)
    }
    if (inputPasswordIcon === 'CheckMarkIcon') {
      setInputPasswordIcon('EditIcon')
    }
  }

  useEffect(() => {
      inputNameRef.current.addEventListener('blur', () => {
        setInputNameIcon('EditIcon')
        setEditName(true)
      })
  }, [editName])

  useEffect(() => {
    inputEmailRef.current.addEventListener('blur', () => {
      setInputEmailIcon('EditIcon')
      setEditEmail(true)
    })
  }, [editEmail])

    useEffect(() => {
    inputPasswordRef.current.addEventListener('blur', () => {
      setInputPasswordIcon('EditIcon')
        setEditPassword(true)
    })
    }, [editPassword])

  return (
    <form className={styles.form}>
        <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setName(e.target.value)}
            icon={inputNameIcon}
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
            icon={inputEmailIcon}
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
            icon={inputPasswordIcon}
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