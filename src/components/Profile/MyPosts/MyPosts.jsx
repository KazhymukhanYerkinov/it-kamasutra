import React from 'react';
import Post from './Post/Post';

import cls from './MyPosts.module.css';



const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hi, how are you?', likeCount: 12},
    {id: 2, message: 'It\'s my first post', likeCount: 8},
  ]

  let postsElement = postData
    .map( (post, index) => <Post key = { index } message = { post.message } likeCount = { post.likeCount }/> );
  

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
        { postsElement }
      </div>
    </div>
  )
}

export default MyPosts;