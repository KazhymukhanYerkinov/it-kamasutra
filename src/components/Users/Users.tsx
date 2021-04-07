import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import { UserType } from '../../types/types';
import User from './User';



type PropsTypes = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void

  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}



const Users: React.FC<PropsTypes> = (props) =>  {
    return (
      <div>
        <Paginator
          pageSize = { props.pageSize }
          totalUsersCount = { props.totalUsersCount }
          currentPage = { props.currentPage }
          onPageChanged = { props.onPageChanged }
          portionSize = { 10 }

        />
        {
          props.users.map((user, index) => (
            <User
              key = { index }
              user = { user }
              followingInProgress = { props.followingInProgress }
              unfollow = { props.unfollow }
              follow = { props.follow }
            />
          ))
        }
      </div>
    )
}

export default Users;