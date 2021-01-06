import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch/>
        <Route path ='/' exact component ={Home} />
        <Route path ='/company' component ={Company} />
        <Route path ='/product' component ={Product} />
        <Route path ='/contact' component ={Contact} />
      </Router>
    </>
  );
}

export default App;
