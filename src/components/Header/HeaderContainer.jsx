import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/auth-reducer';

import Header from './Header';




class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}



let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
  login: state.authPage.login,
})


export default connect(mapStateToProps, { logout })(HeaderContainer);