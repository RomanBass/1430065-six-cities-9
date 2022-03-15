import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../property/property';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route';

type AppScreenProps = {
  rentalOffersNumber: number;
}

function App({rentalOffersNumber}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main rentalOffersNumber={rentalOffersNumber} />} />
        <Route path='login' element={<Login />} />
        <Route path='favorites' element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path='offer/:id' element={<Room />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
//
export default App;
