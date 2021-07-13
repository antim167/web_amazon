import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBars, faUser, faChevronRight, faCartPlus, faChevronDown, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import Flag from 'react-world-flags';
import Ember from '../assets/font/ember/AmazonEmber_Rg.ttf';

const myCustomFont = `
@font-face{
  font-family:'emberRg';
  src:url('${Ember}') format('truetype');
}
html,body{
  font-family:'emberRg',Arial,sans-serif !important;
}`;

/**
* @author
* @class Header
**/

class Header extends Component {
  //1.property
  state = {
    x: '',
    y: ' l934',

    showSingModal: false,
    showAllModal: false,
    overylay: 'a_invisible',
    z: ' '

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
  overylay = () => {
    this.setState({ overylay: 'a_visible' })
  }
  hideovery = () => {
    this.setState({ overylay: 'a_invisible' })
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
  formHandle = () => {
    if (this.state.z === 'formboder') {
      this.setState({ z: '' })
    }
    else {
      this.setState({ z: 'formboder' })
    }
  }
  render() {


    const handleShow = () => {
      this.setState({ showSingModa: true });
    }
    const handleClose = () => {
      this.setState({ showSingModa: false });
    }
    const handleShow2 = () => {
      this.setState({ showAllModal: true });
    }
    const handleClose2 = () => {
      this.setState({ showAllModal: false });
    }
    const handleShow3 = () => {
      this.setState({ showFlagModal: true });
    }
    const handleClose3 = () => {

      this.setState({ showFlagModal: false });
    }

    return (
      <>
        <style>
          {myCustomFont}
        </style>
        <div className={'overylay w-100 h-100 ' + this.state.overylay}></div>
        <Modal className=" handalmodal" show={this.state.showAllModal} onHide={handleClose2} animation={false}>
          <Modal.Header className="mhcolor text-white" closeButton>
            <h5 className="modal-title" id="staticBackdropLabel"><FontAwesomeIcon icon={faUser} /> Hello, Sign in</h5>
            <button onClick={this.closemodal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>

        </Modal>
        <header>
          <div className={' p-1 a_header_top  w-100 ' + this.state.x}>
            <button className=" me-1 ps-0 btn h-100 " style={{ 'width': '9%' }} >
              <img className="img-fluid" src="./image/mainimagae/amz.png" />
            </button>
            <button className=" text-sm-start lh-2 text-white p-1 me-2 btn w-10 h-100" style={{ 'width': '13%' }}>
              <div className=" ms-3" >Hello</div>
              <div className="fw-bold">
                <FontAwesomeIcon className="me-1" icon={faMapMarkerAlt} />select your address</div>
            </button>
            <form className={'me-1 bg-white hform d-inline-block ' + this.state.z}>
              <div className="row m-0 ">
                <div className="col-1 p-0 border-end">
                  <div className="dropdown  p-0">
                    <button className="btn w-100 dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      All
                    </button>
                  </div>
                </div>
                <div className="col-10 p-0 ">
                  <input onBlur={this.formHandle} onFocus={this.formHandle} className="form-control" />
                </div>
                <div className="col-1  bg-warning pt-2"> <FontAwesomeIcon icon={faSearch} /></div>
              </div>
            </form>
            <button onMouseOut={this.hideovery} onMouseOver={this.overylay} className=" a_ht_countrydd_btn me -1 btn  h-100 text-white d-inline-block  position-reletive p-0 " data-bs-toggle="modal" data-bs-target="#staticBackdrop2" style={{ 'width': '5%' }}>
              <Flag code={'in'} className="d-inline-block p-1" height="25" />
              <FontAwesomeIcon className="d-inline-block" icon={faChevronDown} />
              <div className="  text-start text-dark p-3 a_ht_countrydd bg-white rounded-3 boreder position-absolute ">
                <div className="arrow-up arrow-up_country position-absolute"></div>
                <form>
                  <div className="form-check  mb-3 mt-1 ">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <hr />
                  <div className="form-check  mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <div className="form-check  mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div className="form-check  mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                  <hr />
                  <div>
                    <p><Flag code={'in'} className="d-inline-block p-1 " height="25" /><span className="text-dark">You are shopping on Amazon.in. </span></p>
                    <a href="#" className="btn btn-link">Change country/region</a>
                  </div>
                </form>
              </div>

            </button>
            <button onMouseOut={this.hideovery} onMouseOver={this.overylay} className=" a_ht_singin_modal_btn me-1 btn  h-100 text-white position-reletive " style={{ 'width': '12%' }} >
              Hello,Sign in
              <div className="fw-bold">
                <div className="d-inline-block">
                  Account &amp; list</div>
                <FontAwesomeIcon className="d-inline-block ms-1" icon={faChevronDown} />
              </div>
              <div className="a_ht_singin_modal position-absolute ">
                <div className="arrow-up arrow-up_sing position-absolute "></div>
                <div className=" a_singin_modal border-bottom ">
                  <button type="button" className="btn btn-warning w-50 mt-2">Sign in</button>
                  <p className="text-dark">New customer? <a href="#" className="btn btn-link">Start here.</a></p>
                </div>
                <div className="row">
                  <div className="col-6 p-3 ">
                    <h5 className="fw-bold top-0 text-dark"> Your Lists</h5>
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
                  <div className="col-6 p-3 ">
                    <h5 className="fw-bold text-dark"> Your Account</h5>
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
            </button>
            <button className="me-1 btn  h-100 text-white fs-6 " style={{ 'width': '7%' }}>Return
              <div className="fw-bold">&amp; Order</div>
            </button>
            <button className=" btn  h-100 text-white fw-bold" style={{ 'width': '6%' }}><FontAwesomeIcon className="fs-2" icon={faCartPlus} />Cart</button>
          </div>
          <div className=" a_header_bottom w-100 " >
            <ul className=" mt-1   nav float-start">
              <li className=" m-0  nav-item">
                <button onMouseOver={handleShow2} type="button" className="m-1 p-0 btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" > <a className=" p-0 fw-bold fs-6 nav-link" href="#"><FontAwesomeIcon className="me-1" icon={faBars} />All</a></button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Best Seller</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
              </li>
              <li className="nav-item position-reletive">
                <a onMouseOut={this.hideovery} onMouseOver={this.overylay} className="nav-link prime " href="#" >prime<FontAwesomeIcon icon={faCaretDown} /></a>
                <div className="primebox position-absolute rounded-1 p-3  d-none">
                  <div className="arrow-up arrow-up_prime position-absolute ">
                  </div>
                  <img className="img-fluid" src="../image/mainimagae/prime.jpg" />
                </div>
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

      </>
    )
  }
}


Header.propTypes = {}
export default Header