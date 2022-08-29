import '../App.scss';
import ReactGa from 'react-ga';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './index';
import ServicesPage from './pages/ServicesPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

const Routes = () => {
  useEffect(() => {
    ReactGa.initialize('UA-163119480-1');
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/contact us" component={ContactPage} />

        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
