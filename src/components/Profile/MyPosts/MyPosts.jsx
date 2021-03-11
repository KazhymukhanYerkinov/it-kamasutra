import React from 'react';

import cls from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className = { cls.postsBlock }>
      <h3> My Post </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button> Add post </button>
      </div>
      <div className={cls.posts}>
        <Post message = 'Hi, how are you?'/>
        <Post message = 'Its my first post'/>
      </div>
    </div>
  )
}

export default MyPosts;