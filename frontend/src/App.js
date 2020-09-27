import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql/client";
import Layout from './components/layout'
import { AuthLoader } from './views/AuthLoader'
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css'


 
function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <CssBaseline />
        <AuthLoader>
          <Layout />
        </AuthLoader>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
