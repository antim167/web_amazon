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
            <p>1-16 of over 2,000 results for "laptop"</p>

          </div>
          <div className="row border-top a_srch_main_2 border-bottom tbdr">
            <div className="col-3 tbdr  a_anch_dec">
              <div className="srh_avg_cust_review mt-3 ">
                <span className=" d-block fw-bold mb-2">Avg. Customer Review</span>
                <ul className="list-group">
                  <li className="list-group-itemX ">
                    <a href="#" className="text-dark "><span className=" d-block float-start a_aside_star a_srch_sprsht a_5star"></span><span className="  float-start "> &amp; up</span></a>
                  </li>
                  <li className="list-group-itemX ">
                    <a href="#" className="text-dark "><span className=" d-block float-start a_aside_star a_srch_sprsht a_4star"></span><span className="  float-start"> &amp; up</span></a>
                  </li>
                  <li className="list-group-itemX ">
                    <a href="#" className="text-dark "><span className=" d-block float-start a_aside_star a_srch_sprsht a_3star"></span><span className="  float-start"> &amp; up</span></a>
                  </li>
                  <li className="list-group-itemX ">
                    <a href="#" className="text-dark "><span className=" d-block float-start a_aside_star a_srch_sprsht a_2star"></span><span className="  float-start"> &amp; up</span></a>
                  </li>
                  <li className="list-group-itemX ">
                    <a href="#" className="text-dark "><span className=" d-block float-start a_aside_star a_srch_sprsht a_1star"></span><span className="  float-start"> &amp; up</span></a>
                  </li>

                </ul>
              </div>
              <div>
                <span className=" d-block fw-bold mt-3 mb-2">Brand</span>
                <ul className="list-group m-0 a_anch ">
                  <li className="  list-group-item border-0 p-0 ">
                    <a href="#" className="text-dark ">
                      <input className="form-check-input me-1" type="checkbox" value="" />
                      HP
                    </a>
                  </li>
                  <li className="  list-group-item border-0 p-0 ">
                    <a href="#" className="text-dark ">
                      <input className="form-check-input me-1" type="checkbox" value="" />
                      HP
                    </a>
                  </li>
                  <li className="  list-group-item border-0 p-0 ">
                    <a href="#" className="text-dark ">
                      <input className="form-check-input me-1" type="checkbox" value="" />
                      HP
                    </a>
                  </li>
                  <li className="  list-group-item border-0 p-0 ">
                    <a href="#" className="text-dark ">
                      <input className="form-check-input me-1" type="checkbox" value="" />
                      HP
                    </a>
                  </li>

                  <div id="demo" class="collapse">
                    <li className="  list-group-item border-0 p-0 ">
                      <a href="#" className="text-dark ">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="  list-group-item border-0 p-0 ">
                      <a href="#" className="text-dark ">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="  list-group-item border-0 p-0 ">
                      <a href="#" className="text-dark ">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="  list-group-item border-0 p-0 ">
                      <a href="#" className="text-dark ">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="  list-group-item border-0 p-0 ">
                      <a href="#" className="text-dark ">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="  list-group-item border-0 p-0 ">
                      <a href="#" className="text-dark ">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                    <li className="  list-group-item border-0 p-0 ">
                      <a href="#" className="text-dark ">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                        HP
                      </a>
                    </li>
                  </div>
                  <a className=" " data-bs-toggle="collapse" data-bs-target="#demo">See More</a>
                </ul>
              </div>
              <div>
                <ul className="list-group  a_anch">
                  <span className="fw-bold me-2 mt-3">Price</span>
                  <li className="list-group-item border-0 p-0">
                    <a href="#" className="text-dark">Under ₹20,000</a>
                  </li>
                  <li className="list-group-item border-0 p-0">
                    <a href="#" className="text-dark">₹20,000 – ₹30,000</a>
                  </li>
                  <li className="list-group-item border-0 p-0">
                    <a href="#" className="text-dark">₹30,000 – ₹40,000</a>
                  </li>
                  <li className="list-group-item border-0 p-0">
                    <a href="#" className="text-dark">₹40,000 – ₹50,000</a>
                  </li>
                  <li className="list-group-item border-0 p-0">
                    <a href="#" className="text-dark">Over ₹50,000</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-9 tbdr ">
              <div className="row m-0 mt-5 border-bottom">
                <div className="col-3">
                  <a href="#"><img className=" img-fluid" src="./image/mainimagae/srchlap.jpg" /></a>
                </div>
                <div className="col-9   a_anch_dec">
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