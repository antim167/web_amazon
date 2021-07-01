//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { BrowserRouter as Router,Route } from "react-router-dom";
import Detail from './pages/Detail';
import Search from './pages/Search';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
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
         <Route path="/" exact component={ Home }></Route>
         <Route path="/search" exact component={ Search }></Route>
         <Route path="/detail" exact component={ Detail }></Route>
        <Route path="/checkout" exact component={ Checkout }></Route>
       </Router>  
    );
  }
}


App.propTypes = {}
export default App

