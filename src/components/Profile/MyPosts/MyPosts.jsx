import React from 'react';
import Post from './Post/Post';


import cls from './MyPosts.module.css';



const MyPosts = (props) => {

  let postsElement = props.posts
    .map( (post, index) => <Post key = { index } message = { post.message } likeCount = { post.likeCount }/> );
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className = { cls.postsBlock }>
      <h3> My Post </h3>
      <div>
        <div>
          <textarea
            ref = { newPostElement }
            value = { props.newPostText } 
            onChange = { onPostChange }>

          </textarea>
        </div>
        <button onClick = { onAddPost } > Add post </button>
      </div>
      <div className={cls.posts}>
        { postsElement }
      </div>
    </div>
  )
}

export default MyPosts;