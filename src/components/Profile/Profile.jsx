import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import cls from './Profile.module.css';




const Profile = (props) => {
  return (
    <div className={cls.content}>
      <ProfileInfo 
        isOwner = { props.isOwner }
        status = { props.status }
        profile = { props.profile } 

        updateStatus = { props.updateStatus }
        savePhoto = { props.savePhoto }
        saveProfile = { props.saveProfile }  
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;