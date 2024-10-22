import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';


import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store} >
    <Router>
      <App />
    </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
