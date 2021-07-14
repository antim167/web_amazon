import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

/**
* @author
* @class Search
**/

class Search extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <div className="a_srch_main tbdr">
          <div className=" a_srch_main_1 border-bottom">
            <p>1-45 and 55result</p>

          </div>
          <div className="row border-top a_srch_main_2 border-bottom tbdr">
            <div className="col-3 tbdr"></div>
            <div className="col-9 tbdr">
              <div className="row m-0 border-bottom">
                <div className="col-3 border-end">
                  <a href="#"><img className=" img-fluid" src="./image/mainimagae/srchlap.jpg" /></a>
                </div>
                <div className="col-9 border-start  a_anch_dec">
                  <h5><a href="#" className="a_srch_main_1_anch text-dark">Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin &amp; Light Laptop (8GB/256GB SSD + 1TB HDD/Win</a></h5>
                  <p className="position-relative">
                    <a href="#" className=" d-block  position-relative a_spritsheet_con a_srch_sprsht a_4star">
                      <a href="#" className="d-block position-absolute arrow_con spritesheet a_dwn_arrow"></a>
                    </a>
                    <a href="#" className="position-absolute glob_rating text-dark">483</a>
                  </p>
                 <span> <span className="fs-4 text-danger">₹37,990</span> <span className="text-decoration-line-through">₹39,990</span><span className="fw-bold" > Save ₹1,798 (5%)</span></span>
                 <span className="d-block">Save extra with No Cost EMI</span>
                 <p className="position-relative">
                   <a href="#" className=" d-block srch_prime_box prime_pos spritesheet"></a>
                   <span className="position-absolute prm_text"><span> Get it by</span><span className="fw-bold"> Friday, July 16</span></span>
                 </p>
                 <span>FREE Delivery by Amazon</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Layout>
    )
  }
}


Search.propTypes = {}
export default Search