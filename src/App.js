import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Homepage';
import Particles from './components/Particles';
import Vision from './components/Vision';

import './App.scss';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/vision" exact>
        <Vision />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <Header />
      <main>{routes}</main>
      <Particles />
    </Router>
  );
}

export default App;
