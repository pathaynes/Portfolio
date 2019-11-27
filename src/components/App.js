import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './Main';
import BurgerMenu from '../containers/BurgerMenu';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default function App() {
  return (
    <Router>
      <BurgerMenu />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
