import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import cls from './Profile.module.css';



const Profile = () => {
  return (
    <div className={cls.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;