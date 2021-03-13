import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import cls from './Profile.module.css';



const Profile = (props) => {
  return (
    <div className={cls.content}>
      <ProfileInfo />
      <MyPosts 
        state = { props.state } 
        addPost = { props.addPost }
        updateNewPostText = { props.updateNewPostText }
      />
    </div>
  )
}

export default Profile;