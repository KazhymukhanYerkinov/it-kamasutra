import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { 
  follow,  
  unfollow,
  getUsersThunkCreator
} from '../../redux/users-reducer';

import { 
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize, 
  getTotalUsersCount, 
  getUsers 
} from '../../redux/users-selectors';

import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';



type MapStatePropsType = {
  totalUsersCount: number
  currentPage: number
  pageSize: number
  isFetching: boolean
  followingInProgress: Array<number>
  users: Array<UserType>
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

type OwnPropsTypes = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsTypes;


class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersThunkCreator(currentPage, pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.getUsersThunkCreator(pageNumber, pageSize)
  }

  render() {
    return (
      <React.Fragment>
        { this.props.isFetching ? <Preloader />: null }
        <Users 
          totalUsersCount = { this.props.totalUsersCount }
          pageSize = { this.props.pageSize }
          currentPage = { this.props.currentPage }
          onPageChanged = { this.onPageChanged }

          users = { this.props.users }

          follow = { this.props.follow }
          unfollow = { this.props.unfollow } 

          followingInProgress = { this.props.followingInProgress }
        />
      </React.Fragment>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsTypes, AppStateType>(mapStateToProps, {
    follow,
    unfollow, 
    getUsersThunkCreator,
  }),
)(UsersContainer)


