import React, { useState, useEffect } from 'react';
import AverageIssueCloseTime from './components/AverageIssueCloseTime';
import RepositoryData from './components/RepositoryData';
import AveragePRsCloseTime from './components/AveragePRsMergeTime';
import AveragePRsMergedBySize from './components/AveragePRsMergedBySize';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// const token = '5ad31f35b8fff49893d6fbf2e3fcc4ee8d687226';


//Apollo client setup
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
      authorization: 'Bearer '+ token
  }
});


const App = () => {

  const [repoState, setRepoState] = useState({});

  useEffect(()=>{
    setRepoState({
      ...repoState
    })
  },[])

    return (
      <ApolloProvider client={client}>
        <div className='container'>
          <div className='header'>
            <RepositoryData repoState={repoState} setRepoState={setRepoState}/>
          </div>
          <AveragePRsMergedBySize repoState={repoState}/>
          <div className='time-cards'>
            <AveragePRsCloseTime repoState={repoState}/>
            <AverageIssueCloseTime repoState={repoState}/>
          </div>
        </div>

      </ApolloProvider>
    );
}

export default App;
