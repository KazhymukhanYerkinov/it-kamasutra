import React from 'react';
import { Route } from 'react-router';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';

import './App.css';



function App() {
  return (
    <div className = 'app-wrapper'>
      <Header />
      <Sidebar />
      <div className = 'app-wrapper-content'>
        <Route path = '/profile' component = { Profile } />
        <Route path = '/dialogs' component = { Dialogs } />
      </div>
    </div>
  );
}

export default App;
