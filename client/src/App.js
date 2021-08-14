import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import MyTips from './components/MyTips';
import Graph from './components/Graph';
import GetNews from './components/News';
import Settings from './components/Settings';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/register'>
          <Register/>
          </Route>
          <Route exact path='/mytips'>
            <MyTips />
          </Route>
          <Route exact path='/graph'>
            <Graph />
          </Route>
          <Route exact path='/news'>
            <GetNews />
          </Route>
          <Route exact path='/settings'>
            <Settings  />
          </Route>
        </Switch>
      </div>
    </Router>
    </ApolloProvider>

  );
}

export default App;