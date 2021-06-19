//import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBars } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class App
**/

class App extends Component {
  //1.property
  state = {
    x: '',
    y:''
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
      this.setState({ x: '' })

    }
  }
  componentDidMount() {
    //this method will be called when page/componet is render
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (

      <div className="App ">
        <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className={'modal-dialog modal-dialog-scrollable '}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p>This content should appear at the bottom after you scroll.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
        <header>
          <div className={'p-1 a_header_top w-100 ' + this.state.x}>
            <button className=" me-1 ps-0 btn h-100 " style={{ 'width': '10%' }} >
              <img src="./image/slider/antim6.png" />
            </button>
            <button className=" text-sm-start lh-2 text-white p-1 me-1 btn w-10 h-100" style={{ 'width': '16%' }}>
              <div className="fw-light ms-3" >Hello</div>
              <div className="fw-bold">
                <FontAwesomeIcon icon={faMapMarkerAlt} />select your address</div>
            </button>
            <form className=" me-1 bg-white hform   h-50 d-inline-block " style={{ 'width': '40%' }}>c</form>
            <button className="me -1 btn w-4 h-100" style={{ 'width': '4%' }}>d</button>

            <button className="me-1 btn w-8 h-100" style={{ 'width': '12%' }}>e</button>
            <button className="me-1 btn w-8 h-100" style={{ 'width': '8%' }}>f</button>
            <button className=" btn w-8 h-100" style={{ 'width': '8%' }}>g</button>
          </div>
          <div className=" a_header_bottom w-100" >
            <ul className=" mt-1  fw-bolder nav float-start">
              <li className=" m-0 fw-bold nav-item">
                <button type="button" className= "m-0 p-0 btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" > <a className="m-1 p-0 fw-bold fs-6 nav-link" href="#"><FontAwesomeIcon icon={faBars} />All</a></button>
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
            <ul className=" img-fluid mt-2  float-end ">
              <a className="hbenner">
                <img src="./image/slider/headernenner_.jpg" />
              </a>
            </ul>
          </div>
        </header>
        <div className="a_main   ">
          <div className="a_main_top position-relative  ">
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
          <div className=" container position-absolute top-0 start-0 a_main_bot w-100 "></div>

        </div>
        <footer></footer>


      </div>
    );
  }
}


App.propTypes = {}
export default App

