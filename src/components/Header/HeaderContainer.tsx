import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

import Header, { DispatchPropsType, PropsType } from './Header';




class HeaderContainer extends React.Component<PropsType & DispatchPropsType> {
  render() {
    return <Header {...this.props} />
  }
}



let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.authPage.isAuth,
  login: state.authPage.login,
})


export default connect<PropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
  logout })(HeaderContainer);