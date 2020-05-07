import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.sass'
import App from './App';
import { Store } from './Store.js';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

const Application = () => (
  <Store>
    <Router>
      <App />
    </Router>
  </Store>
);

ReactDOM.render(<Application />, root);
