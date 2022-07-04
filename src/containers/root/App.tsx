import React from 'react';
import Template from 'containers/templates/FullNavigator';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Template />
      <Outlet />
    </div>
  );
};

export default App;
