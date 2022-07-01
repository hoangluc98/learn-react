import React from 'react';
import { Link, Outlet } from 'react-router-dom';

type Invoice = {
  id: number;
  name: string;
};

export const data: Invoice[] = [
  {
    id: 1,
    name: 'Google'
  },
  {
    id: 2,
    name: 'Facebook'
  }
];

const Invoices = () => {
  return (
    <main>
      <h2>Invoices</h2>

      {data.map((item) => (
        <Link to={item.id.toString()} key={item.id}>
          {item.name}
        </Link>
      ))}

      <Outlet />
    </main>
  );
};

export default Invoices;
