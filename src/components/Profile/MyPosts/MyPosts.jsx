import React from 'react';
import Post from './Post/Post';

import cls from './MyPosts.module.css';



const MyPosts = (props) => {

  

  let postsElement = props.posts
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