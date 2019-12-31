import React, { useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

  AOS.init({
    duration: 3000,
  });
  useEffect(() => {
    AOS.refresh();
  }, []);

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
