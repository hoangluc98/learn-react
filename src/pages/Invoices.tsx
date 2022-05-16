import React from 'react';
import { data } from 'data/invoice';
import { Link, Outlet } from 'react-router-dom';

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
