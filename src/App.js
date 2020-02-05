import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './css/app.scss';
import 'normalize.css';

import Home from './pages/home/Home';
import Photography from './pages/photography/Photography';
import Web from './pages/web/Web';
import Marketing from './pages/marketing/Marketing';
import Blog from './pages/blog/Blog';
import WorkWithUs from './pages/work_with_us/Work-With-Us';

import Terms from './pages/small_prints_pages/Terms';
import CookiePolicy from './pages/small_prints_pages/Cookie-Policy';
import PrivacyPolicy from './pages/small_prints_pages/Privacy-Policy';

import Nav from './components/nav';
import Footer from './components/footer';

import './js/cookies';
import './js/webp';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector(".active").addEventListener("click", () => {
      document.body.scrollIntoView()
    })
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
            <Route path="/Work-With-Us">
              <WorkWithUs />
            </Route>
            <Route path="/Privacy-Policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/Cookie-Policy">
              <CookiePolicy />
            </Route>
            <Route path="/Terms">
              <Terms />
            </Route>
            <Route path="/Photography">
              <Photography />
            </Route>
            <Route path="/Web">
              <Web />
            </Route>
            <Route path="/Marketing">
              <Marketing />
            </Route>
            <Route path="/Blog">
              <Blog />
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
