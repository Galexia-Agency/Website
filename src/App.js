import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/app.scss';
import Home from './pages/home/Home';
import Photography from './pages/photography/Photography';
import Web from './pages/web/Web';
import Marketing from './pages/marketing/Marketing';
import 'normalize.css';
import Nav from './components/nav';
import Footer from './components/footer';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="GalexiaStudios">
      <Router>
        <ScrollToTop />
        <Nav />
        <div id="content">
          <Switch>
            <Route path="/Photography">
              <Photography />
            </Route>
            <Route path="/Web">
              <Web />
            </Route>
            <Route path="/Marketing">
              <Marketing />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
