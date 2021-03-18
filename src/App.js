import React from 'react';
import { Route } from 'react-router';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

import './App.css';





function App(props) {
  return (
    <div className = 'app-wrapper'>
      <Header />
      <Sidebar />
      <div className = 'app-wrapper-content'>

        <Route path = '/profile' render = { () => <ProfileContainer /> } />

        <Route path = '/dialogs' render = { () => <DialogsContainer /> } />

        <Route path = '/users' render = { () => <UsersContainer /> } />

      </div>
    </div>
  );
}

export default App;
