import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import Post from './Post/Post';
import { maxLengthCreator, required } from '../../../utils/validators';
import { CreateField, TextArea } from '../../../common/FormControl/FormControl';

import cls from './MyPosts.module.css';
import { PostType } from '../../../types/types';



const maxLength10 = maxLengthCreator(10);

type PropsType = {

}
const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit = { props.handleSubmit }>
      <div>

        { CreateField<AddPostFormValuesTypeKeys>("Post message", 'newPostText', [required, maxLength10], TextArea, ) }

      </div>
      <button type = 'submit'> Add post </button>
    </form>
  )
}


const AddNewPostReduxForm  = reduxForm<AddPostFormValuesType>({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);



export type MapStatePropsType = {
  posts: Array<PostType>
}

export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}

type AddPostFormValuesType = {
  newPostText: string
}

type AddPostFormValuesTypeKeys = Extract<keyof AddPostFormValuesType, string>

const MyPosts: React.FC<MapStatePropsType & DispatchPropsType> = React.memo(props => {

  let postsElement = props.posts
    .map((post, index) => <Post key={index} message={post.message} likeCount={post.likeCount} />);

  let onAddPost = (formData: AddPostFormValuesType) => {
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
})




export default MyPosts;