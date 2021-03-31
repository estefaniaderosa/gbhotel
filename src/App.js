import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import AboutUs from './pages/AboutUs';
import Book from './pages/Book';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Rooms from './pages/Rooms';
import Subscribed from './pages/Subscribed';
import Tours from './pages/Tours';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/tours" component={Tours} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/book" component={Book} />
          <Route path="/subscribed" component={Subscribed} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
