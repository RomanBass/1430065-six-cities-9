import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Main from './components/main/main';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root'));
