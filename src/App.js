//import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBars, faUser, faChevronRight, faCartPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Flag from 'react-world-flags';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* @author
* @class App
**/

class App extends Component {
  //1.property
  state = {
    x: '',
    y: ' l934'
  }
  //2.constructor
  constructor(props) {
    super(props);
  }
  //3.method
  //create only fat arrow fun
  handleScroll = () => {
    console.log("ok" + window.scrollY);
    if (window.scrollY > 90) {
      this.setState({ x: 'position-fixed start-0 end-0' })
    } else {
      this.setState({ x: ' ' })

    }
  }
  closemodal = () => {
    this.setState({ y: ' 1934 ' })
  }
  handlemodal = () => {
    this.setState({ y: ' l334' })
  }
  componentDidMount() {
    //this method will be called when page/componet is render
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (

      <div className="App ">
        <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className={' h-100 modal-dialog modal-dialog-scrollable handalmodal ' + this.state.y}>
            <div className="modal-content">
              <div className="modal-header mhcolor text-white">
                <h5 className="modal-title" id="staticBackdropLabel"><FontAwesomeIcon icon={faUser} /> Hello, Sign in</h5>
                <button onClick={this.closemodal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom">
                <h5 className="fw-bolder ps-4">Trending</h5>
                <ul className="nav flex-column mhul border-bottom pt-1 mb-2">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Best Seller</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">New Releases</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Mover &amp; Shaker</a>
                  </li>

                </ul>
                <h5 className="fw-bolder ps-4">Digital Content &amp; Devices</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Echo &amp; Alexa<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Fire Tv <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Kindle E-Readers &amp; eBook <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Audible Audiobooks <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Amazon Prime Video<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Amazon Prime Music<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4">Shop By Department</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Mobiles Computer<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Men's Fashion<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Women Fashion<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">See All<FontAwesomeIcon className="ms-1" icon={faChevronDown} /></a>
                  </li>

                </ul>
                <h5 className="fw-bolder ps-4">Program &amp; Feature</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Gift Cards &amp; Mobile Recharge<FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Flight Tickets</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">FoundOnAmazon</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Full Store Directory</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4">Help &amp; Setting</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Your Account</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Customer Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sing In</a>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">

              </div>
            </div>
          </div>
        </div>
        <div className="modal a_ht_singin_modal" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdrop1Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header a_singin_modal text-center">
                <button type="button" className="btn btn-warning w-50">Sign in</button>

                <p>New customer? <a href="#" className="btn btn-link">Start here.</a></p>
              </div>
              <div className="modal-body ">
                <div className="row">
                  <div className="col-6 ">
                    <h5 className="fw-bold"> Your Lists</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Create a Wash List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Find a Wash List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Wash from Any Website</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Baby Wish List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Discover your Style</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Explore Showroom</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 ">
                    <h5 className="fw-bold"> Your Account</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Your Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Your Order</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">your Wish List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >your Recommendation</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Your prime Membership</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Your Prime video</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">you Subscribe &amp; save Item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="#" >Membership &amp; Subscription</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Your Amazon Buisnes Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">your Seller Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link d" href="#" >Manage your content and Devices</a>
                      </li>
                    </ul></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <header>
          <div className={' p-1 a_header_top  w-100 ' + this.state.x}>
            <button className=" me-1 ps-0 btn h-100 " style={{ 'width': '9%' }} >
              <img src="./image/slider/antim6.png" />
            </button>
            <button className=" text-sm-start lh-2 text-white p-1 me-2 btn w-10 h-100" style={{ 'width': '13%' }}>
              <div className="fw-light ms-3" >Hello</div>
              <div className="fw-bold">
                <FontAwesomeIcon className="me-1" icon={faMapMarkerAlt} />select your address</div>
            </button>
            <form className=" me-1 bg-white hform   h-50 d-inline-block " style={{ 'width': '46%' }}>c</form>
            <button className="me -1 btn  h-100 text-white d-inline-block p-0" style={{ 'width': '5%' }}><Flag code={'in'} className="d-inline-block p-1" height="25" /><FontAwesomeIcon className="d-inline-block" icon={faChevronDown} /></button>

            <button className="me-1 btn  h-100 text-white " style={{ 'width': '12%' }} data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Hello,Sign in
              <div className="fw-bold"><div className="d-inline-block">Account &amp; list</div> <FontAwesomeIcon className="d-inline-block" icon={faChevronDown} /></div>
            </button>
            <button className="me-1 btn  h-100 text-white fs-6 " style={{ 'width': '7%' }}>Return
              <div className="fw-bold">&amp; Order</div>

            </button>
            <button className=" btn  h-100 text-white fw-bold" style={{ 'width': '6%' }}><FontAwesomeIcon className="fs-2" icon={faCartPlus} />Cart</button>
          </div>
          <div className=" a_header_bottom w-100" >
            <ul className=" mt-1  fw-bolder nav float-start">
              <li className=" m-0 fw-bold nav-item">
                <button onClick={this.handlemodal} type="button" className="m-1 p-0 btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" > <a className="m-1 p-0 fw-bold fs-6 nav-link" href="#"><FontAwesomeIcon className="me-1" icon={faBars} />All</a></button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">prime</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Electronic</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fashion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New Relese</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Customer Services</a>
              </li>
            </ul>
            <ul className=" img-fluid mt-1 p-0  float-end ">
              <a className=" m-0 p-0 hbenner">
                <img src="./image/slider/headernenner_.jpg" />
              </a>
            </ul>
          </div>
        </header>
        <div className="a_main  ">
          <div className="a_main_top  position-relative ">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./image/slider/2.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./image/slider/7.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./image/slider/3.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./image/slider/4.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./image/slider/5.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./image/slider/6.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./image/slider/1.jpg" className="d-block " alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next  h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
          <div className=" ml-1 position-absolute  a_main_bot">
            <div className="a_main_bot_1 row m-0 mb-3">

              <div className="col-3 p-3 tbdr">
                <div className="a_mainbox_1 p-3">
                  <div className=" a_mainbox_1_inner h-100 w-100 bg-danger">
                    <div className=" bg-warning w-100">
                      <h5 className="p-1">Top picks for your home</h5>
                      <div className="row m-0">
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className=" btn btn-success rounded-0 p-0 h-100"><img className=" pe-1 h-75 img-fluid" src="./image/slider/mainimg/1.jpg" />ACs</a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className=" btn btn-success rounded-0 p-0 h-100"><img className="ps-1 h-75 img-fluid" src="./image/slider/mainimg/2.jpg" />Refrigerator</a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className=" btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="./image/slider/mainimg/3.jpg" />Microwaves</a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className=" btn btn-success rounded-0 p-0 h-100"><img className="ps-1 h-75 img-fluid" src="./image/slider/mainimg/4.jpg" />Washing Machines</a>
                        </div>
                      </div>
                    </div>
                    <a href="#" >see more</a>
                  </div>
                </div>
              </div>
              <div className="col-3 p-3 tbdr">
                <div className="a_mainbox_1 p-3 ">
                  <div className="a_mainbox_1_inner h-100 w-100 bg-danger">
                    <div className="bg-warning ">
                    <h5 className="p-1">Everyday Esential</h5>
                      <div className="row m-0">
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/5.jpg" />Cleaning essential</a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/6.jpg" />Immunity &amp; Healthcare</a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/7.jpg" />Women Personal Care</a>
                        </div>
                        <div className="col-6 p-0 tbdr">
                          <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/8.jpg" />Men's grooming</a>
                        </div>
                      </div>
                    </div>
                    <a href="#">show more</a>
                  </div>
                </div>
              </div>
              <div className="col-3 p-0 p-3 tbdr">
                <div className="a_mainbox_1 p-3 ">
                <div className="a_mainbox_1_inner h-100 w-100 bg-danger">
                  <div className="bg-warning p-0">
                  <h5 className="p-1">Bring home the fun | Games for all ages</h5>
                  <div> <a href="#" className="btn btn-success  p-0"><img className=" img-fluid" src="./image/mainimagae/9.jpg" /></a></div>
                
                  </div>
                  <a href="#" >See more</a>
                  </div>
                </div>
              </div>
              <div className="col-3 p-0  tbdr">D</div>

            </div>
            <div className="a_main_bot_2 row m-0 mb-3">
              <div className="col-3 p-0  tbdr">C</div>
              <div className="col-3 p-0  tbdr">D</div>
              <div className="col-3 p-0  tbdr">C</div>
              <div className="col-3 p-0  tbdr">D</div>
            </div>
            <div className="a_main_bot_3 mb-3 ">

            </div>
            <div className="a_main_bot_4 mb-3 "></div>
            <div className="a_main_bot_5 row mb-3 m-0">
              <div className="col-3 p-0  tbdr">C</div>
              <div className="col-3 p-0  tbdr">D</div>
              <div className="col-3 p-0  tbdr">C</div>
              <div className="col-3 p-0  tbdr">D</div>
            </div>
            <div className="a_main_bot_6 mb-3"></div>
            <div className="a_main_bot_7 mb-3"></div>
            <div className="a_main_bot_8 mb-3 "></div>
            <div className="a_main_bot_9 row mb-3 m-0">
              <div className="col-3 p-0  tbdr">C</div>
              <div className="col-3 p-0  tbdr">D</div>
              <div className="col-3 p-0  tbdr">C</div>
              <div className="col-3 p-0  tbdr">D</div>
            </div>
            <div className="a_main_bot_10 mb-3"></div>
            <div className="a_main_bot_11 mb-3"></div>
            <div className="a_main_bot_12 row mb-3 m-0">
            <div className="col-3 p-0  tbdr">C</div>
              <div className="col-3 p-0  tbdr">D</div>
              <div className="col-3 p-0  tbdr">C</div>
              <div className="col-3 p-0  tbdr">D</div>
            </div>
          </div>

        </div>

        <footer></footer>


      </div>
    );
  }
}


App.propTypes = {}
export default App

