import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

import { initializeApp } from './redux/app-reducer';

import './App.css';
import Preloader from './common/Preloader/Preloader';










class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <div className = 'app-wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className = 'app-wrapper-content'>

          <Route path = '/profile/:userId?' render = { () => <ProfileContainer /> } />

          <Route path = '/dialogs' render = { () => <DialogsContainer /> } />

          <Route path = '/users' render = { () => <UsersContainer /> } />

          <Route path = '/login' render = { () => <Login /> } />

        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.appPage.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App);
