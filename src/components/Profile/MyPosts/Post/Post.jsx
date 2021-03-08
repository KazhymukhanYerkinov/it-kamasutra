import React from 'react';

import cls from './Post.module.css';

const Post = () => {
    return (
        <div className={cls.item}> 
          <img src = 'https://cs16planet.ru/steam-avatars/images/avatar1833.jpg' alt = ''/>
          post 1 
          <div>
            <span> like </span>
          </div>
        </div>
    )
}
export default Post;