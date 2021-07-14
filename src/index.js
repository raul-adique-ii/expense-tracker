import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { AppProvider } from './context/GlobalState'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);