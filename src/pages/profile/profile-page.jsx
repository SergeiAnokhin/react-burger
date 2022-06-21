import styles from './profile-page.module.css';
import { useRef, useState } from 'react';
import { EmailInput, Input, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

export function ProfilePage() {

  const [name, setName] = useState('Сергей')
  const [email, setEmail] = useState('user@mail.ru')
  const [password, setPassword] = useState('123456')

  const inputNameRef = useRef(null)
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.profileMenu}>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}><NavLink to='/profile' className={styles.menuLink}>Профиль</NavLink></li>
          <li className={styles.menuItem}><NavLink to='/profile/orders' className={styles.menuLink}>История заказов</NavLink></li>
          <li className={styles.menuItem}><NavLink to='/profile/exit' className={styles.menuLink}>Выход</NavLink></li>
        </ul>
      </div>
      <div className={styles.profileContent}>
      <form className={styles.form}>
        {/* <EmailInput onChange={onChangeName} value={name} name={'name'}/>
        <EmailInput onChange={onChangeEmail} value={email} name={'email'}/>
        <EmailInput onChange={onChangePassword} value={password} name={'password'}/> */}
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setName(e.target.value)}
          icon={'EditIcon'}
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
          placeholder={'Логин'}
          onChange={e => setEmail(e.target.value)}
          icon={'EditIcon'}
          value={email}
          name={'email'}
          error={false}
          ref={inputEmailRef}
          onIconClick={'undefined'}
          errorText={'Ошибка'}
          size={'default'}
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
          onIconClick={'undefined'}
          errorText={'Ошибка'}
          size={'default'}
        />
      </form>
      </div>
    </div>
  );
} 