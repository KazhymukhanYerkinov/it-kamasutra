import React from 'react';
import { Route } from 'react-router';

import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

import './App.css';






function App(props) {
  return (
    <div className = 'app-wrapper'>
      <HeaderContainer />
      <Sidebar />
      <div className = 'app-wrapper-content'>

        <Route path = '/profile/:userId?' render = { () => <ProfileContainer /> } />

        <Route path = '/dialogs' render = { () => <DialogsContainer /> } />

        <Route path = '/users' render = { () => <UsersContainer /> } />

      </div>
    </div>
  );
}

export default App;
