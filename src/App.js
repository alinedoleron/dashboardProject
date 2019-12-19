import React, { Component } from 'react';
import './App.css';
import AverageIssueCloseTime from './components/AverageIssueCloseTime';
import AveragePRsCloseTime from './components/AveragePRsCloseTime';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const token = '7c12dc376fc6d7404baecd5ab900ac3869cd315e';


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
          <AveragePRsCloseTime/>
          <AverageIssueCloseTime/>
      </ApolloProvider>
    );
  }
}

export default App;
