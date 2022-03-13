import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../property/property';

type AppScreenProps = {
  rentalOffersNumber: number;
}

function App({rentalOffersNumber}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main rentalOffersNumber={rentalOffersNumber} />} />
        <Route path='login' element={<Login />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='offer/:id' element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
