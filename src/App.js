import React from 'react';

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
        {/* <Profile /> */}
        <Dialogs />
      </div>
      
    </div>
  );
}

export default App;
