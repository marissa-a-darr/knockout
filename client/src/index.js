import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import {Auth0Provider}  from '@auth0/auth0-react';
import './index.css';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Auth0Provider
    domain="dev-6sw6l83lzlsol656.us.auth0.com"
    clientId="4no0E7qsQamOtQ0k9rbY7AqrCh6XqbDO"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    
  >
 

    <App />
   
    </Auth0Provider>
    
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


