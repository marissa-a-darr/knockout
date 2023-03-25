import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import Nav from './components/Nav/Nav';
import Header from './components/Nav/Header';


import AuthenticationButton from './components/Nav/testingAuth';


import { ChakraProvider } from '@chakra-ui/react';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

console.log('httpLink', httpLink);
console.log('authLink', authLink);
console.log('authLink concat httpLink', authLink.concat(httpLink));
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
   <>
   <ApolloProvider client={client}>
   <ChakraProvider>
    
    <Header></Header>
    
   
    </ChakraProvider>
    </ApolloProvider>
    </>
  );
}

export default App;
