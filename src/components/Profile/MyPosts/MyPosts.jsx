import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Post from './Post/Post';
import { maxLengthCreator, required } from '../../../utils/validators';
import { TextArea } from '../../../common/FormControl/FormControl';

import cls from './MyPosts.module.css';



const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit = { props.handleSubmit }>
      <div>
        <Field
          name = 'newPostText'
          placeholder = 'Post message'
          component = { TextArea }
          validate = {[required, maxLength10]}
        />
      </div>
      <button type = 'submit'> Add post </button>
    </form>
  )
}

const AddNewPostReduxForm  = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

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




export default MyPosts;