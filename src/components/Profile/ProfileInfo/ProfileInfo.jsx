import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';

import cls from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='' />
      </div>
      <div className = { cls.descriptionBlock }>
        <img src = { props.profile.photos.large } alt = "profile ava"/>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;