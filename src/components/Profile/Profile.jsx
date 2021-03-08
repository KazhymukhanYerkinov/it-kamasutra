import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import cls from './Profile.module.css';


const Profile = () => {
  return (
    <div className={cls.content}>
      <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='' />
      </div>
      <div>
        ava + description
      </div>

      <MyPosts />
      
    </div>
  )
}

export default Profile;