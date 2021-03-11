import React from 'react';

import cls from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='' />
      </div>
      <div className = { cls.descriptionBlock }>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;