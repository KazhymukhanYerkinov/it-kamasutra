import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { 
  follow,  
  unfollow,
  toggleFollowingProgress,
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


class UsersContainer extends React.Component {

  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersThunkCreator(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
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
          toggleFollowingProgress = { this.props.toggleFollowingProgress }
        />
      </React.Fragment>
    )
  }
}

let mapStateToProps = (state) => {
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
  connect(mapStateToProps, {
    follow,
    unfollow, 
    toggleFollowingProgress,
    getUsersThunkCreator,
  }),
)(UsersContainer)


