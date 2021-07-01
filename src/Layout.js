import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './component/Header'
import Footer from './component/Footer'


/**
* @author
* @class Layout
**/

class Layout extends Component {
 state = {}
 render() {
  return(
    <>
    
      <Header></Header>
      {
     this.props.children
    }
    <Footer></Footer>
   </>
    )
  
   }
 }


Layout.propTypes = {}
export default Layout