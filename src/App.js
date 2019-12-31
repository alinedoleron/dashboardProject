import React, { Component } from 'react';
import './App.css';
import AverageIssueCloseTime from './components/AverageIssueCloseTime';
import AveragePRsCloseTime from './components/AveragePRsMergeTime';
import AveragePRsMergedBySize from './components/AveragePRsMergedBySize';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const token = 'e58bd9e0535b7adc2f99e6800ede50676eff1e36';


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
        <div className='container'>
          <div className='time-cards'>
            <AveragePRsCloseTime/>
            <AverageIssueCloseTime/>
          </div>
          <AveragePRsMergedBySize/>
        </div>

      </ApolloProvider>
    );
  }
}

export default App;
