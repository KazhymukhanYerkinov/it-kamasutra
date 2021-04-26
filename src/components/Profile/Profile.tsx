import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import cls from './Profile.module.css';
import { ProfileType } from '../../types/types';


type PropsType = {
  profile: ProfileType | null
  status: string
  isOwner: boolean

  savePhoto: (file: File) => void
  updateStatus: (status: string) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile:React.FC<PropsType> = (props) => {
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