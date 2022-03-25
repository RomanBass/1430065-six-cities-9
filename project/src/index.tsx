import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Setting = {
  RENTAL_OFFERS_NUMBER: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentalOffersNumber={Setting.RENTAL_OFFERS_NUMBER}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
