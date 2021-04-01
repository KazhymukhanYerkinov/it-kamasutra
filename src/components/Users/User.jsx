import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Users.module.css';

const User = ({ user, followingInProgress, unfollow, follow  }) => {
  return (
    <div>

      <span>
        <div>
          <NavLink to={`profile/${user.id}`}>
            <img src={user.photos.small
              ? user.photos.small
              : 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'}

              alt="" className={cls.userPhoto} />
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => unfollow(user.id)}> Unfollow </button>
            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => follow(user.id)}> Follow </button>
          }
        </div>
      </span>

      <span>
        <span>
          <div> {user.name} </div>
          <div> {user.status} </div>
        </span>
        <span>
          <div>  u.location.country  </div>
          <div>  u.location.city  </div>
        </span>
      </span>

    </div>
  )
}

export default User;