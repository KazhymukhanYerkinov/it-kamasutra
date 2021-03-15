import React from 'react';
import { Route } from 'react-router';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';

import './App.css';




function App(props) {
  return (
    <div className = 'app-wrapper'>
      <Header />
      <Sidebar />
      <div className = 'app-wrapper-content'>

        <Route path = '/profile' 
          render = { () => <Profile
            store = { props.store }
          /> 
        } />

        <Route path = '/dialogs' 
          render = { () => <DialogsContainer
            store = { props.store } 
          /> 
          } />

      </div>
    </div>
  );
}

export default App;
