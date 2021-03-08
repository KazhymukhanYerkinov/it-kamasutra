import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './Sidebar.module.css';



const Sidebar = () => {
  return (
    <nav className={cls.nav}>
      <div className = {cls.item}> <NavLink to='/profile' activeClassName = {cls.activeLink}> Profile </NavLink></div>
      <div className = {cls.item}> <NavLink to='/dialogs' activeClassName = {cls.activeLink}> Messages </NavLink></div>
      <div className = {cls.item}> <a href='/'> News </a></div>
      <div className = {cls.item}> <a href='/'> Music </a></div>
      <div className = {cls.item}> <a href='/'> Settings </a></div>
    </nav>
  )
}

export default Sidebar;