import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import RequiredAuth from './RequiredAuth';
import App from 'containers/root/App';
import Expenses from 'pages/Expenses';
import Invoices from 'pages/Invoices';
import Invoice from 'pages/Invoice';
// import NotFound from 'pages/NotFound';

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<RequiredAuth />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<h2>Please select an invoice</h2>} />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
