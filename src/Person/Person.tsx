import React, { useState, FormEvent } from 'react';
import './Person.css';

export type PersonProps = {
  name: string;
  age: number | string;
  children: React.ReactNode;
  click: () => void;
  delete?: () => void;
};

export function Person(props: PersonProps) {
  const [name, setName] = useState<string>('');

  const changeName = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  return (
    <div className="person">
      <p>
        I&lsquo;m a {props.name} and I&lsquo;m {props.age} years old
      </p>
      <p>{props.children}</p>
      <button onClick={props.click}>Click me</button>
      {props.delete && <button onClick={props.delete}>Delete me</button>}

      <input value={name} type="text" onInput={changeName} />
    </div>
  );
}
