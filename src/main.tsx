import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from '@auth0/auth0-react';



 ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <Auth0Provider domain='dev-o8ea8tzikc0zrjie.us.auth0.com' clientId='m6hiTAdJWwCe29ND9V2em1DQgz1LxnFY'
    authorizationParams={{redirect_uri : window.location.origin}}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
