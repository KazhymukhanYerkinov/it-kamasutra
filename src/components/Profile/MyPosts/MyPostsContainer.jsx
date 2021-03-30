import { connect } from 'react-redux';

import { addPostActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';



const mapStateTopProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  }
}

const MyPostsContainer = connect(mapStateTopProps, mapStateToDispatch)(MyPosts);

export default MyPostsContainer;