import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div>
          <h1>React + Express</h1>

          <button onClick={() => {
            fetch('/api/message')
              .then(response => response.json())
              .then(data => setMessage(data.message))
              .catch(error => console.error('Error fetching message:', error));
          }}>
            Fetch Message
          </button>
          <p>{message}</p>

        </div>
      </header>
    </div>
  );
}

export default App;
