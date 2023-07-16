import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';

const OFFERS_COUNT = 313;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardsCount={OFFERS_COUNT} />
  </React.StrictMode>
);
