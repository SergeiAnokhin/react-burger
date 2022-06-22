import styles from './profile-page.module.css';
import { useEffect, useRef, useState } from 'react';
import { EmailInput, Input, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export function ProfilePage() {

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

  const checkActive = (to) => {
    return to ? to.isExact : false;
  };

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
    <Router>
      <div className={styles.wrapper}>
        <div className={styles.profileMenu}>
          <ul className={styles.menuItems}>
            <li className={styles.menuItem}><NavLink to='/profile' className={styles.menuLink} activeClassName={styles.activeLink} isActive={checkActive}>Профиль</NavLink></li>
            <li className={styles.menuItem}><NavLink to='/profile/orders' className={styles.menuLink} activeClassName={styles.activeLink} isActive={checkActive}>История заказов</NavLink></li>
            <li className={styles.menuItem}><NavLink to='/profile/exit' className={styles.menuLink} activeClassName={styles.activeLink} isActive={checkActive}>Выход</NavLink></li>
          </ul>
          <p className={styles.menuText}>В этом разделе вы можете изменить свои персональные данные</p>
        </div>
        <div className={styles.profileContent}>
          <Switch>
            <Route exact path="/profile">
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
            </Route>
            <Route exact path="/profile/orders">
              <h1 className={styles.historyTitle}>Здесь будет компонент с историей заказов.</h1>
            </Route>
            <Route exact path="/profile/exit">
              <h2 className={styles.exitTitle}>Этой страницы не будет, будет просто разлогирование.</h2>
            </Route>
          </Switch>     
        </div>
      </div>
    </Router>
  );
} 