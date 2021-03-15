import { connect } from 'react-redux';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';



const mapStateTopProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  }
}

const MyPostsContainer = connect(mapStateTopProps, mapStateToDispatch)(MyPosts);

export default MyPostsContainer;