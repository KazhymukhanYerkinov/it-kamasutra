import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let postData = [
  {id: 1, message: 'Hi, how are you?', likeCount: 12},
  {id: 2, message: 'It\'s my first post', likeCount: 8},
]

let dialogsData = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Dimych'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Valera'},
  {id: 6, name: 'Viktor'},

]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-kamasutra'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
  {id: 6, message: 'Yaho'},
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts = { postData } dialogs = { dialogsData } messages = { messagesData }/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
