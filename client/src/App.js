import './App.css';
import React from 'react';
// import Nav from './components/Nav/Nav';
import Header from './components/Nav/Header';


import AuthenticationButton from './components/Nav/testingAuth';


import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
   <>
   <ChakraProvider>
    
    <Header></Header>
    
   
    </ChakraProvider>
    </>
  );
}

export default App;
