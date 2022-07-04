import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Routers from 'router';
import './index.css';
import AuthProvider from 'shared/hook/useAuth';
import { Provider } from 'react-redux';
import { store } from 'reducers/store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'shared/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <AuthProvider>
          <Routers />
        </AuthProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
