import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../property/property';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route';
import {Offers} from '../../types/offer';
import {Reviews} from '../../types/review';
import {AppRoute} from '../../const';

type AppScreenProps = {
  rentalOffersNumber: number;
  offers: Offers;
  reviews: Reviews;
}

function App({rentalOffersNumber, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.RootPath} element={<Main rentalOffersNumber={rentalOffersNumber} />} />
        <Route path={AppRoute.LoginPath} element={<Login />} />
        <Route path={AppRoute.FavoritesPath} element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.OfferPath} element={<Room offers={offers} reviews={reviews}/>} />
        <Route path={AppRoute.WrongPath} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
