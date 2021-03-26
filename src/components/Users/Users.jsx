import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './Users.module.css';



const Users = (props) =>  {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((page, index) => {
            return (
            <span 
              onClick = {() => props.onPageChanged(page)}
              className = {props.currentPage === page? cls.selectedPage: '' } 
              key = { index }> 
                { page } 
              </span>
            )
          })}
        </div>
        {
          props.users.map((u, index) => <div key={index}>
            <span>
              <div>
                <NavLink to = {`profile/${u.id}`}>
                  <img src={u.photos.small
                      ? u.photos.small
                      : 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'}

                    alt="" className={cls.userPhoto} />
                  </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button disabled = { props.followingInProgress.some(id => id === u.id)} onClick = {() => props.unfollow(u.id)}> Unfollow </button>
                  : <button disabled = { props.followingInProgress.some(id => id === u.id)} onClick = {() => props.follow(u.id)}> Follow </button>
                }
              </div>
            </span>

            <span>
              <span>
                <div> {u.name} </div>
                <div> {u.status} </div>
              </span>
              <span>
                <div>  u.location.country  </div>
                <div>  u.location.city  </div>
              </span>
            </span>
          </div>)
        }
      </div>
    )
}

export default Users;