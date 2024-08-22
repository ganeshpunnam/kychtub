// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CompareProvider } from './CompareContext';

ReactDOM.render(
  <CompareProvider>
    <App />
  </CompareProvider>,
  document.getElementById('root')
);
