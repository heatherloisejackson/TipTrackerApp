import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import MyTips from './components/MyTips';
import Graph from './components/Graph';
import News from './components/News';
import Settings from './components/Settings';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/mytips'>
            <MyTips />
          </Route>
          <Route exact path='/graph'>
            <Graph />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route>
          <Route exact path='/settings'>
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
