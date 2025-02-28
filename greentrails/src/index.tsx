import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './app.tsx';
import header from './header.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
