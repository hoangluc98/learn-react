import React, { useCallback, useState } from 'react';
import { useAuth } from 'shared/hook/useAuth';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setAuth({
        email,
        name
      });
    },
    [email, name, setAuth]
  );

  const inputHandler = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (field === 'email') setEmail(event.currentTarget.value);
    if (field === 'name') setName(event.currentTarget.value);
  };

  const hanldeLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setAuth({
      email: '',
      name: ''
    });

    navigate('/');
  };

  return (
    <div className="app">
      <h1>Hello World</h1>

      {auth && auth.email ? (
        <>
          <nav>
            <Link to="/invoices">Invoices</Link>
            <Link to="/expenses">Expenses</Link>
          </nav>
        </>
      ) : (
        <>
          <form>
            <label>Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onInput={inputHandler('email')}
            />
            <label>Name:</label>
            <input type="text" id="name" name="name" value={name} onInput={inputHandler('name')} />
            <input type="submit" onClick={handleSubmit} />
          </form>
        </>
      )}
      <Outlet />

      {auth && auth.email && <button onClick={hanldeLogout}>Logout</button>}
    </div>
  );
};

export default App;
