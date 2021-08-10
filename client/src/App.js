import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import MyTips from './components/MyTips';
import Graph from './components/Graph';
import GetNews from './components/News';
import Settings from './components/Settings';
import NavBar from './components/NavBar';

// MD: Added import @Apollo/client 
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// MD: Added ApolloClient
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/register'>
            <Register />
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
            <Settings />
          </Route>
        </Switch>
        <NavBar/>
      </div>
    </Router>
    </ApolloProvider>

  );
}

export default App;
