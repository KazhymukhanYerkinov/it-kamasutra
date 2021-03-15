import React from 'react';
import axios from 'axios';

import cls from './Users.module.css';



class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
        this.props.setUsers(response.data.items)
    })
  }
  render() {
    
    return (
      <div>
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