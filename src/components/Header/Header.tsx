import React from 'react';
import { NavLink } from 'react-router-dom';


import cls from './Header.module.css';


export type PropsType = {
  isAuth: boolean
  login: string | null
}

export type DispatchPropsType = {
  logout: () => void
}

const Header: React.FC<PropsType & DispatchPropsType> = (props) => {
  return (
    <header className={cls.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png' alt='' />
      <div className = {cls.loginBlock}>
        { props.isAuth ? <div> {props.login} - <button onClick = {props.logout}> Log out </button> </div>:
        <NavLink to = {`/login`}> Login </NavLink>}
      </div>
    </header>
  )
}
export default Header;