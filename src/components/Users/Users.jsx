import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import User from './User';




const Users = (props) =>  {

    
    
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