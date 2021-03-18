import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import cls from './Profile.module.css';




const Profile = (props) => {
  return (
    <div className={cls.content}>
      <ProfileInfo profile = { props.profile } />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;