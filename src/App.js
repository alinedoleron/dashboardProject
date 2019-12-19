import React, { Component } from 'react';
import './App.css';
import AverageIssueCloseTime from './components/AverageIssueCloseTime';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


const token = 'c455c3ed3a4a31eca7b19d562dd3285bea7e56bf';


//Apollo client setup
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
      authorization: 'Bearer '+ token
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <AverageIssueCloseTime/>
      </ApolloProvider>
    );
  }
}

export default App;
