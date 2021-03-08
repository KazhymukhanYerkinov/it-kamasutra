import React from 'react';
import './App.css';

function App() {
  return (
    <div className = 'app-wrapper'>
      <header className = 'header'>
        <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png' alt = '' />
      </header>

      <nav className = 'nav'>
        <div> <a href = '#'> Profile </a></div>
        <div> <a href = '#'> Messages </a></div>
        <div> <a href = '#'> News </a></div>
        <div> <a href = '#'> Music </a></div>
        <div> <a href = '#'> Settings </a></div>
      </nav>

      <div className = 'content'>
        <div>
          <img src = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt = '' />
        </div>
        <div>
          ava + description
        </div>  

        <div>
          My Post
          <div>
            New Post
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
