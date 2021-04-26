import { connect } from 'react-redux';

import { actions } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';

import MyPosts, { DispatchPropsType, MapStatePropsType } from './MyPosts';



const mapStateTopProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  }
}


const MyPostsContainer = connect<MapStatePropsType, DispatchPropsType, {}, AppStateType>(mapStateTopProps, {
  addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;