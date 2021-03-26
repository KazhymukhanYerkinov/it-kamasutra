import React from 'react';
import { connect } from 'react-redux';

import { 
  follow,
  setCurrentPage, 
  setUsers, 
  unfollow,
  setTotalUsersCount, 
  toggleIsFetching,
  toggleFollowingProgress
} from '../../redux/users-reducer';

import { usersAPI } from '../../api/api';



import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
        this.props.toggleIsFetching(false);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.setUsers(data.items)
        this.props.toggleIsFetching(false);
    })
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// let mapStateToDispatch = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow, 
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);