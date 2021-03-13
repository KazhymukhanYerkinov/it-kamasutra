import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import state from './redux/state';
import { addPost } from './redux/state'
import reportWebVitals from './reportWebVitals';

import './index.css';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state = { state } addPost = { addPost }/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
