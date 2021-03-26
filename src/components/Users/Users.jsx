import React from 'react';
import axios from 'axios';
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

                  ? <button onClick={() => {
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '93cc3dca-64c8-4757-b260-26eddbd4c9d7'
                        }
                        
                      })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      })
                      props.unfollow(u.id)}
                    }> Unfollow </button>

                  : <button onClick={() => {
                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '93cc3dca-64c8-4757-b260-26eddbd4c9d7'
                        }
                      })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id)
                        }
                      })

                  }}> Follow </button>
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