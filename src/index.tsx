import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import Expenses from './pages/Expenses';
import Invoices from './pages/Invoices';
import Invoice from './pages/Invoice';
// import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<h2>Please select an invoice</h2>} />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
