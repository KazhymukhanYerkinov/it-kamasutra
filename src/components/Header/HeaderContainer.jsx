import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { setAuthUserData } from '../../redux/auth-reducer';

import Header from './Header';



class HeaderContainer extends React.Component {
  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { 
      withCredentials: true
    }).then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login)
      }
      
    })
  }
  render() {
    return <Header {...this.props} />
  }
}



let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
  login: state.authPage.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);