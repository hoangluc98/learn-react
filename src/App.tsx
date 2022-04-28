import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import PersonForm from './Person/Form';

function App() {
  const [name, setName] = useState<string>('');

  const handleClick = () => {
    setName('Ahihi');
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>

        <Person name="Hoang Luc" age="24" click={handleClick}>
          My hobbies are ...
        </Person>

        <h1>{name}</h1>
        <button onClick={handleClick}>Click me</button>

        <PersonForm />
      </header>
    </div>
  );
}

export default App;
