import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Particles from './components/Particles';
import Vision from './components/Vision';
import Services from './components/Services';
import Team from './components/Team';

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
      <Route path="/team" exact>
        <Team />
      </Route>
      <Route path="/services" exact>
        <Services />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <Header />
      <Container
        className="themed-container content-position"
        fluid={true}
      >
        <main>{routes}</main>
      </Container>
      {/* <Particles /> */}
    </Router>
  );
}

export default App;
