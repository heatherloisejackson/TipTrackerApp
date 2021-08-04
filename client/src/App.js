import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';


// import NavFooter from './components/Dashboard'

function App() {
  return (
    <div>
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
      {/* <NavFooter/> */}
    </div>
    </Router>
    
    </div>
  );
}

export default App;
