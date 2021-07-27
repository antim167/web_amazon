import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'
/**
* @author
* @class YourWishList
**/

class YourWishList extends Component {
  state = {}
  render() {
    return (
      <Layout>
       <div className="wishlist tbdr container-fluid p-2"> 
       </div>
      </Layout>
    )
  }
}


YourWishList.propTypes = {}
export default YourWishList