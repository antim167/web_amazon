//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from './pages/Detail';
import Search from './pages/Search';
import Home from './pages/Home';

import SingIn from './pages/SignIn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
import OrderHistory from './pages/OrderHistory';
import Account from './pages/Account';
import DeliveryOption from './pages/DeliveryOption';
import PaymentMeth from './pages/PaymentMeth';

import YourWishList from './pages/YourWishList';
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
        <Route path="/detail"  component={Detail}></Route>
        <Route path="/deliveryoption"  component={DeliveryOption}></Route>
        <Route path="/paymentmethod"  component={PaymentMeth}></Route>
        <Route path="/signin" component={SingIn}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/delivery" component={Delivery}></Route>
        <Route path="/account" component={Account}></Route>
        <Route path="/orderhistory" component={OrderHistory}></Route>
        <Route path="/yourwishlist" component={YourWishList}></Route>
      </Router>
    );
  }
}


App.propTypes = {}
export default App

