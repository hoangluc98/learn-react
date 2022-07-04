import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import RequiredAuth from './RequiredAuth';
import App from 'containers/root/App';

// Components
import CardInformation from 'pages/redeem/card-information/CardInformation';

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<RequiredAuth />}></Route>
          <Route path="/card-info" element={<CardInformation />}></Route>

          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
