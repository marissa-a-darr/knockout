
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';
const AuthenticationButton =  () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const getAccessToken = async () => {
  console.log( await getAccessTokenSilently())
  }
 getAccessToken()
 
  return (
    <>
<LogoutButton />  <LoginButton />
    </>
  )
};

export default AuthenticationButton;