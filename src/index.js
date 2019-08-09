import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/ImageFinder/App';
import BankAccaunt from './components/BankAccaunt/Dashboard';
import './index.css';

ReactDOM.render(
  <>
    <BankAccaunt />
    <App />
  </>,
  document.getElementById('root'),
);
