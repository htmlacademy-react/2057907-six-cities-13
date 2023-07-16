import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../Pages/Main-screen/Main-screen';
import FavoritesScreen from '../../Pages/Favourites-screen/Favourites-screen';
import LoginScreen from '../../Pages/Login-screen/Login-screen';
import OfferScreen from '../../Pages/Offer-screen/Offer-screen';
import NotFoundScreen from '../../Pages/Not-found-screen/Not-found-screen';
import PrivateRoute from '../Private-route/Private-route';


type AppProps = {
  cardsCount: number;
};

function App({cardsCount}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen cardsCount={cardsCount} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login} element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Offer} element={<OfferScreen />}
          />
          <Route
            path="*" element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
