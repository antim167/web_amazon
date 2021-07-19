import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTh } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @class Search
**/

class Search extends Component {
  //1.property
  state = {
    view: {
      r: 100,
      col1: 3,
      col2: 9
    }
  }
  //2 connstructor

  //3 method
  showGridView = () => {
    this.setState({
      view: {
        r: '25 float-start',
        col1: 12,
        col2: 12
      }
    })
  }
  showListView = () => {
    this.setState({
      view: {
        r: 100,
        col1: 3,
        col2: 9
      }
    })
  }
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

                  <div id="demo" className="collapse">
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
              <div className="">
                <ul className="nav float-end ">
                  <li className="nav-item">
                    <a className="nav-link text-dark  " href="#" onClick={this.showGridView}>
                      <FontAwesomeIcon icon={faTh} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark " href="#" onClick={this.showListView}>
                      <FontAwesomeIcon icon={faList} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="a_search_filtertop border-bottom">
                <h2>filter by price</h2>
                <ul className="nav float start">
                  <li className="nav-item m-3">
                    <a className="nav-link btn btn-light border text-dark " href="#">under $ 20,000</a>
                  </li>
                  <li className="nav-item m-3">
                    <a className="nav-link btn btn-light border text-dark " href="#">under $ 20,000</a>
                  </li>
                  <li className="nav-item m-3">
                    <a className="nav-link btn btn-light border text-dark " href="#">under $ 20,000</a>
                  </li>
                  <li className="nav-item m-3">
                    <a className="nav-link btn btn-light border text-dark " href="#">under $ 20,000</a>
                  </li>
                </ul>
              </div>
              <div className={'row m-0 mt-5 border-bottom w-' + this.state.view.r}>
                <div className={'col-' + this.state.view.col1}>
                  <a href="#"><img className=" img-fluid" src="./image/mainimagae/srchlap.jpg" /></a>
                </div>
                <div className={'a_anch_dec col-' + this.state.view.col2}>
                  <h5><a href="#" className="a_srch_main_1_anch text-dark">Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin &amp; Light Laptop (8GB/256GB SSD + 1TB HDD/Win</a></h5>
                  <p className="m-0">
                    <a href="#"  ><span className="d-block float-start  a_spritsheet_con a_srch_sprsht a_4star"></span>
                      <a href="#"> <span className="d-block  arrow_con spritesheet a_dwn_arrow float-start"></span></a>
                      <a href="#" className=" text-dark">483</a>
                    </a>
                  </p>
                  <span> <span className="fs-4 text-danger">₹37,990</span> <span className="text-decoration-line-through">₹39,990</span><span className="fw-bold" > Save ₹1,798 (5%)</span></span>
                  <span className="d-block">Save extra with No Cost EMI</span>
                  <p className="m-0">
                    <a href="#" className=""><span className=" d-block float-start srch_prime_box prime_pos spritesheet"></span></a>
                    <span><span> Get it by</span><span className="fw-bold"> Friday, July 16</span></span>
                  </p>
                  <span>FREE Delivery by Amazon</span>
                </div>
              </div>
              <div className={'row m-0 mt-5 border-bottom w-' + this.state.view.r}>
                <div className={'col-' + this.state.view.col1}>
                  <a href="#"><img className=" img-fluid" src="./image/mainimagae/srchlap.jpg" /></a>
                </div>
                <div className={'a_anch_dec col-' + this.state.view.col2}>
                  <h5><a href="#" className="a_srch_main_1_anch text-dark">Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin &amp; Light Laptop (8GB/256GB SSD + 1TB HDD/Win</a></h5>
                  <p className="m-0">
                    <a href="#"  ><span className="d-block float-start  a_spritsheet_con a_srch_sprsht a_4star"></span>
                      <a href="#"> <span className="d-block  arrow_con spritesheet a_dwn_arrow float-start"></span></a>
                      <a href="#" className=" text-dark">483</a>
                    </a>
                  </p>
                  <span> <span className="fs-4 text-danger">₹37,990</span> <span className="text-decoration-line-through">₹39,990</span><span className="fw-bold" > Save ₹1,798 (5%)</span></span>
                  <span className="d-block">Save extra with No Cost EMI</span>
                  <p className="m-0">
                    <a href="#" className=""><span className=" d-block float-start srch_prime_box prime_pos spritesheet"></span></a>
                    <span><span> Get it by</span><span className="fw-bold"> Friday, July 16</span></span>
                  </p>
                  <span>FREE Delivery by Amazon</span>
                </div>
              </div>
              <div className={'row m-0 mt-5 border-bottom w-' + this.state.view.r}>
                <div className={'col-' + this.state.view.col1}>
                  <a href="#"><img className=" img-fluid" src="./image/mainimagae/srchlap.jpg" /></a>
                </div>
                <div className={'a_anch_dec col-' + this.state.view.col2}>
                  <h5><a href="#" className="a_srch_main_1_anch text-dark">Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin &amp; Light Laptop (8GB/256GB SSD + 1TB HDD/Win</a></h5>
                  <p className="m-0">
                    <a href="#"  ><span className="d-block float-start  a_spritsheet_con a_srch_sprsht a_4star"></span>
                      <a href="#"> <span className="d-block  arrow_con spritesheet a_dwn_arrow float-start"></span></a>
                      <a href="#" className=" text-dark">483</a>
                    </a>
                  </p>
                  <span> <span className="fs-4 text-danger">₹37,990</span> <span className="text-decoration-line-through">₹39,990</span><span className="fw-bold" > Save ₹1,798 (5%)</span></span>
                  <span className="d-block">Save extra with No Cost EMI</span>
                  <p className="m-0">
                    <a href="#" className=""><span className=" d-block float-start srch_prime_box prime_pos spritesheet"></span></a>
                    <span><span> Get it by</span><span className="fw-bold"> Friday, July 16</span></span>
                  </p>
                  <span>FREE Delivery by Amazon</span>
                </div>
              </div>
              <div className={'row m-0 mt-5 border-bottom w-' + this.state.view.r}>
                <div className={'col-' + this.state.view.col1}>
                  <a href="#"><img className=" img-fluid" src="./image/mainimagae/srchlap.jpg" /></a>
                </div>
                <div className={'a_anch_dec col-' + this.state.view.col2}>
                  <h5><a href="#" className="a_srch_main_1_anch text-dark">Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin &amp; Light Laptop (8GB/256GB SSD + 1TB HDD/Win</a></h5>
                  <p className="m-0">
                    <a href="#"  ><span className="d-block float-start  a_spritsheet_con a_srch_sprsht a_4star"></span>
                      <a href="#"> <span className="d-block  arrow_con spritesheet a_dwn_arrow float-start"></span></a>
                      <a href="#" className=" text-dark">483</a>
                    </a>
                  </p>
                  <span> <span className="fs-4 text-danger">₹37,990</span> <span className="text-decoration-line-through">₹39,990</span><span className="fw-bold" > Save ₹1,798 (5%)</span></span>
                  <span className="d-block">Save extra with No Cost EMI</span>
                  <p className="m-0">
                    <a href="#" className=""><span className=" d-block float-start srch_prime_box prime_pos spritesheet"></span></a>
                    <span><span> Get it by</span><span className="fw-bold"> Friday, July 16</span></span>
                  </p>
                  <span>FREE Delivery by Amazon</span>
                </div>
              </div>
              <div className={'row m-0 mt-5 border-bottom w-' + this.state.view.r}>
                <div className={'col-' + this.state.view.col1}>
                  <a href="#"><img className=" img-fluid" src="./image/mainimagae/srchlap.jpg" /></a>
                </div>
                <div className={'a_anch_dec col-' + this.state.view.col2}>
                  <h5><a href="#" className="a_srch_main_1_anch text-dark">Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin &amp; Light Laptop (8GB/256GB SSD + 1TB HDD/Win</a></h5>
                  <p className="m-0">
                    <a href="#"  ><span className="d-block float-start  a_spritsheet_con a_srch_sprsht a_4star"></span>
                      <a href="#"> <span className="d-block  arrow_con spritesheet a_dwn_arrow float-start"></span></a>
                      <a href="#" className=" text-dark">483</a>
                    </a>
                  </p>
                  <span> <span className="fs-4 text-danger">₹37,990</span> <span className="text-decoration-line-through">₹39,990</span><span className="fw-bold" > Save ₹1,798 (5%)</span></span>
                  <span className="d-block">Save extra with No Cost EMI</span>
                  <p className="m-0">
                    <a href="#" className=""><span className=" d-block float-start srch_prime_box prime_pos spritesheet"></span></a>
                    <span><span> Get it by</span><span className="fw-bold"> Friday, July 16</span></span>
                  </p>
                  <span>FREE Delivery by Amazon</span>
                </div>
              </div>
              <div className={'row m-0 mt-5 border-bottom w-' + this.state.view.r}>
                <div className={'col-' + this.state.view.col1}>
                  <a href="#"><img className=" img-fluid" src="./image/mainimagae/srchlap.jpg" /></a>
                </div>
                <div className={'a_anch_dec col-' + this.state.view.col2}>
                  <h5><a href="#" className="a_srch_main_1_anch text-dark">Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin &amp; Light Laptop (8GB/256GB SSD + 1TB HDD/Win</a></h5>
                  <p className="m-0">
                    <a href="#"  ><span className="d-block float-start  a_spritsheet_con a_srch_sprsht a_4star"></span>
                      <a href="#"> <span className="d-block  arrow_con spritesheet a_dwn_arrow float-start"></span></a>
                      <a href="#" className=" text-dark">483</a>
                    </a>
                  </p>
                  <span> <span className="fs-4 text-danger">₹37,990</span> <span className="text-decoration-line-through">₹39,990</span><span className="fw-bold" > Save ₹1,798 (5%)</span></span>
                  <span className="d-block">Save extra with No Cost EMI</span>
                  <p className="m-0">
                    <a href="#" className=""><span className=" d-block float-start srch_prime_box prime_pos spritesheet"></span></a>
                    <span><span> Get it by</span><span className="fw-bold"> Friday, July 16</span></span>
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