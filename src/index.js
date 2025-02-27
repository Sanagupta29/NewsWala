import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { AppProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
