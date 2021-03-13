import React from 'react';
import Post from './Post/Post';

import cls from './MyPosts.module.css';



const MyPosts = (props) => {

  let postsElement = props.state.posts
    .map( (post, index) => <Post key = { index } message = { post.message } likeCount = { post.likeCount }/> );
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }

  return (
    <div className = { cls.postsBlock }>
      <h3> My Post </h3>
      <div>
        <div>
          <textarea
            ref = { newPostElement }
            value = { props.state.newPostText } 
            onChange = { onPostChange }>

          </textarea>
        </div>
        <button onClick = { addPost } > Add post </button>
      </div>
      <div className={cls.posts}>
        { postsElement }
      </div>
    </div>
  )
}

export default MyPosts;