import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
