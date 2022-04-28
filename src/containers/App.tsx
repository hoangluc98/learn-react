import React, { useState } from 'react';
import logo from 'logo.svg';
import './App.css';
import { Person, PersonProps } from 'components/Person/Person';
import PersonForm from 'components/Person/Form';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

type PersonType = Pick<PersonProps, 'name' | 'age'> & {
  id: string | number;
};

function App() {
  const [name, setName] = useState<string>('');
  const [persons, setPersons] = useState<PersonType[]>([
    {
      id: 1,
      name: 'Hoang Luc',
      age: 24
    },
    {
      id: 2,
      name: 'Hoang Chien',
      age: 25
    },
    {
      id: 3,
      name: 'Le Tri',
      age: 23
    }
  ]);

  const handleClickPerson = () => {
    setName('Ahihi');
  };

  const handleDeletePerson = (index: number) => {
    const tempPersons = [...persons];
    tempPersons.splice(index, 1);
    setPersons(tempPersons);
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

        <Person name="Hoang Luc" age="24" click={handleClickPerson}>
          My hobbies are ...
        </Person>

        <ErrorBoundary>
          {persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={handleClickPerson}
                delete={() => handleDeletePerson(index)}>
                My hobbies are ...
              </Person>
            );
          })}
        </ErrorBoundary>

        <PersonForm />
      </header>
    </div>
  );
}

export default App;
