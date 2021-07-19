import React, { Component } from 'react'
import PropTypes from 'prop-types'
import reactDom from 'react-dom'

/**
* @author
* @class Footer
**/

class Footer extends Component {
    state = {}
    render() {
        return (

            <>
                <footer>
                    <a href="#" className="btn btn-success w-100 border-0 rounded-0  lh-lg" style={{ backgroundColor: '#37475a', height: '50px' }}>Back to top</a>
                    <div className="a_footer_top a_footer_anch pt-5"  >
                        <div className="container ">
                            <div className="row lh-1 fw-normal  m-0 text-white">
                                <div className="col-3 fs-6 p-0">
                                    <h6>Get to Know Us</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Careers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Press Releases</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#" >Amazon Cares</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#" >Gift a Smaile</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3 ">
                                    <h6>Connect with Us</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">Facebook</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Twiter</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">instagram</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-3 ">
                                    <h6>Make Money with Us</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">Sell on Amazon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sell under Amazon Accelerator</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Amazon Global Selling</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#" >Become an Affiliate</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#" >Fulfilment by Amazon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#" >Advertise Your Products</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#" >Amazon Pay on Merchants</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-3 ">
                                    <h6>Let Us Help You</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">Covid-19 and Amazon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Your Account</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Return Center</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#" >100% Purches Protected</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Amazon App Dwonload</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#" >Amazon Assistant Dwonload</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Help</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="text-secondary" />
                        <div className="d-flex justify-content-center">
                            <a href="#" className=""><span className=" me-5 d-block  f_amazon_pos home_spritesheet f_amz_con" ></span></a>
                            <button className=" m-0 p-0 btn text-white border ">
                            <span className=" ms-1 mt-1 me-1 d-block  float-start  f_glob_pos foot_spritesheet f_glob_con" ></span>
                            <span className="  float-start">English</span>
                            <span className="  ms-4 mt-1 me-1 d-block  float-start  f_updwon_arrow_pos foot_spritesheet f_updwon_arrow_con"></span>
                            </button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <ul className="nav">
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Australia</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Brazil</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Canada</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link " href="#">china</a>
                                </li>

                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">France</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Mexico</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">Poland</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link " href="#">Singapore</a>
                                </li>


                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">spain</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">united stated</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">united Arab</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link " href="#">china</a>
                                </li>

                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link" href="#">itly</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link " href="#">japan</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link " href="#">natherland</a>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <a className="nav-link " href="#">china</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container p-0 a_ft_bot_font a_footer_anch">
                        <div className="row m-0 ps-5 pe-5 w-100" tbdr>
                            <div className=" me-5 col p-3">
                                <ul className="nav flex-column"> 
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            AbeBooks
                                            Books, art
                                            &amp; collectibles</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Shopbop
                                            Designer
                                            Fashion Brands</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="  col me-5 p-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Amazon Web Services
                                            Scalable Cloud
                                            Computing Servicess</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Amazon Business
                                            Everything For
                                            Your Business</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="  col me-5 p-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Audible
                                            Download
                                            Audio Books</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Prime Now
                                            2-Hour Delivery
                                            on Everyday Items</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="  col me-5 p-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            DPReview
                                            Digital
                                            Photography</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Amazon Prime Music
                                            70 million songs, ad-free
                                            Over 9 million podcast episodes</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="  col me-5 p-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                            Amazon Prime Music
                                            70 million songs, ad-free
                                            Over 9 million podcast episodes</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-white  a_footer_anch d-flex justify-content-center">

                        <ul className="nav">
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link text-white" href="#">Conditions of Use &amp; Sale</a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link text-white" href="#">Privacy Notice</a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link text-white" href="#">Interest-Based Ads</a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link text-white" href="#">© 1996-2021, Amazon.com, Inc. or its affiliates</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </>


        )
    }
}


Footer.propTypes = {}
export default Footer