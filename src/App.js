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
          <Route path="/gbhotel" exact component={Home} />
          <Route path="/gbhotel/rooms" component={Rooms} />
          <Route path="/gbhotel/tours" component={Tours} />
          <Route path="/gbhotel/reviews" component={Reviews} />
          <Route path="/gbhotel/aboutus" component={AboutUs} />
          <Route path="/gbhotel/book" component={Book} />
          <Route path="/gbhotel/subscribed" component={Subscribed} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
