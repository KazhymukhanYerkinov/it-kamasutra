import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import cls from './Profile.module.css';




const Profile = (props) => {
  return (
    <div className={cls.content}>
      <ProfileInfo />
      <MyPostsContainer 
        store = { props.store }
      />
    </div>
  )
}

export default Profile;