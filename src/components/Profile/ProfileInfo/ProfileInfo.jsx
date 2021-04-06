import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';

import cls from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }
  
  return (
    <div>
      <div className = { cls.descriptionBlock }>
        <img className = {cls.mainPhoto} src = { props.profile.photos.large || 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj' } alt = "profile ava"/>
        { props.isOwner && <input type = 'file' onChange = { onMainPhotoSelected }/> }
        <ProfileStatusWithHooks status = { props.status } updateStatus = { props.updateStatus }/>
      </div>
    </div>
  )
}

export default ProfileInfo;