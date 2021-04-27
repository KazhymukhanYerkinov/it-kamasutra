
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../common/Paginator/Paginator';
import { FilterType, follow, getUsersThunkCreator, unfollow } from '../../redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from '../../redux/users-selectors';
import User from './User';
import UsersSearchForm from './UsersSearchForm';



type PropsTypes = {

}



const Users: React.FC<PropsTypes> = (props) =>  {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(getUsersThunkCreator(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
      dispatch(getUsersThunkCreator(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
      dispatch(getUsersThunkCreator(currentPage, pageSize, filter))
    }
    const onFollow = (userId: number) => {
      dispatch(follow(userId))
    }
    const onUnfollow = (userId: number) => {
      dispatch(unfollow(userId))
    }

    return (
      <div>
        <UsersSearchForm 
          onFilterChanged = { onFilterChanged }
        />

        <Paginator
          pageSize = { pageSize }
          totalUsersCount = { totalUsersCount }
          currentPage = { currentPage }
          onPageChanged = { onPageChanged }
          portionSize = { 10 }
        />
        {
          users.map((user, index) => (
            <User
              key = { index }
              user = { user }
              followingInProgress = { followingInProgress }
              unfollow = { onUnfollow }
              follow = { onFollow }
            />
          ))
        }
      </div>
    )
}



export default Users;