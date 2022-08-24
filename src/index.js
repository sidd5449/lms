import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import history from './utils/history';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname='/courses'
  );
};

const providerConfig = {
      clientId:'U2JPiNx2cz8ZOiSsi77vJjbeLOe7OzJF',
      domain:'educater.us.auth0.com',
      redirectUri:window.location.origin,
      onRedirectCallback,
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Auth0Provider
      {...providerConfig}
    >
      <App />
    </Auth0Provider>
    
  </BrowserRouter>
);

