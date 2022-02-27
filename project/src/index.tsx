import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  RENTAL_OFFERS_NUMBER: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentalOffersNumber={Setting.RENTAL_OFFERS_NUMBER}
    />
  </React.StrictMode>,
  document.getElementById('root'));
