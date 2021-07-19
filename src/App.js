//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from './pages/Detail';
import Search from './pages/Search';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import SingIn from './pages/SignIn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
/**
* @author
* @class App
**/

class App extends Component {
  //1.property

  //2.constructor

  //3.method
  //create only fat arrow fun

  render() {
    return (
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/detail" e component={Detail}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/signin" component={SingIn}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/delivery" component={Delivery}></Route>
      </Router>
    );
  }
}


App.propTypes = {}
export default App

