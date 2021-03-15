import React from 'react';
import axios from 'axios';

import cls from './Users.module.css';



class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
    })
  }
  render() {
    let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );
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
              onClick = {() => this.onPageChanged(page)}
              className = {this.props.currentPage === page? cls.selectedPage: '' } 
              key = { index }> 
                { page } 
              </span>
            )
          })}
        </div>
        {
          this.props.users.map((u, index) => <div key={index}>
            <span>
              <div>
                <img src={
                  u.photos.small
                    ? u.photos.small
                    : 'https://yt3.ggpht.com/ytc/AAUvwngw35YY8vYI86RTOoEGafSxEjghjzTcKw3LbMyZ=s900-c-k-c0x00ffffff-no-rj'}

                  alt="" className={cls.userPhoto} />
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => this.props.unfollow(u.id)}> Unfollow </button>
                  : <button onClick={() => this.props.follow(u.id)}> Follow </button>
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
}

export default Users;