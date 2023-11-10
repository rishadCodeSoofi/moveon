import React from 'react';
import { createRoot } from 'react-dom/client'; // Update the import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

const appRoot = createRoot(root);
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
