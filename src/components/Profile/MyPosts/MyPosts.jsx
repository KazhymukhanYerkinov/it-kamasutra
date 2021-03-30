import React from 'react';
import Post from './Post/Post';


import cls from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';



const MyPosts = (props) => {

  let postsElement = props.posts
    .map((post, index) => <Post key={index} message={post.message} likeCount={post.likeCount} />);

  let onAddPost = (formData) => {
    props.addPost(formData.newPostText);
  }


  return (
    <div className={cls.postsBlock}>
      <h3> My Post </h3>

      <div className={cls.posts}>
        <AddNewPostReduxForm onSubmit = { onAddPost }/>

        {postsElement}
      </div>
    </div>
  )
}
const AddNewPostForm = (props) => {
  return (
    <form onSubmit = { props.handleSubmit }>
      <div>
        <Field
          name = 'newPostText'
          component = 'textarea'
        />

        
      </div>
      <button type = 'submit'> Add post </button>
    </form>
  )
}

const AddNewPostReduxForm  = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;