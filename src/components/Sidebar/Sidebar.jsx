import React from 'react';

import cls from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={cls.nav}>
      <div className = {cls.item}> <a href='/'> Profile </a></div>
      <div className = {cls.item}> <a href='/'> Messages </a></div>
      <div className = {cls.item}> <a href='/'> News </a></div>
      <div className = {cls.item}> <a href='/'> Music </a></div>
      <div className = {cls.item}> <a href='/'> Settings </a></div>
    </nav>
  )
}

export default Sidebar;