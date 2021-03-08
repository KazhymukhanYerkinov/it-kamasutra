import React from 'react';

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

      <div>
        My Post
          <div>
          New Post
          </div>
          <div className = {cls.posts}>
            <div className = {cls.item}> post 1 </div>
            <div className = {cls.item}> post 2 </div>
            <div className = {cls.item}> post 3 </div>
          </div>
          
      </div>
    </div>
  )
}

export default Profile;