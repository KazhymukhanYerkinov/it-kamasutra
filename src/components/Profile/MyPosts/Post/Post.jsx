import React from 'react';

import cls from './Post.module.css';

const Post = (props) => {
    return (
        <div className={cls.item}> 
          <img src = 'https://cs16planet.ru/steam-avatars/images/avatar1833.jpg' alt = ''/>
          { props.message }
          <div>
            <span> like: { props.likeCount }</span>
          </div>
        </div>
    )
}
export default Post;