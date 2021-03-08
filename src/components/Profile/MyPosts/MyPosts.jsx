import React from 'react';

import cls from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button> Add post </button>
      </div>
      <div className={cls.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;