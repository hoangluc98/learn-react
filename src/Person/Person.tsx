import React from 'react';

type PersonProps = {
  name: string;
  age: number | string;
  children: React.ReactNode;
};

function Person(props: PersonProps) {
  return (
    <div className="person">
      <p>
        I&lsquo;m a {props.name} and I&lsquo;m {props.age} years old
      </p>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
