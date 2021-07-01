import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

import { Carousel } from 'react-bootstrap'
/**
* @author
* @class Home
**/

class Home extends Component {
    state = {}
    render() {
        return (
            <Layout>

                <React.Fragment>
                    <div className="a_main   ">
                        <div className="a_main_top  position-relative ">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src="./image/slider/3.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src="./image/slider/2.jpg"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src="./image/slider/7.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Item>
                                        <img
                                            className="d-block "
                                            src="./image/slider/4.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src="./image/slider/5.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src="./image/slider/6.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src="./image/slider/1.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div className=" ml-1 position-absolute  a_main_bot ">
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
                                <div className="col-3 p-0  tbdr">




                                </div>
                            </div>
                            <div className="a_main_bot_2 row m-0 mb-3">
                                <div className="col-3 p-0  tbdr p-3">
                                    <div className="a_mainbox_2 p-3 ">
                                        <div className="a_mainbox_2_inner h-100 w-100">
                                            <div className="p-0">
                                                <h5>Pay your credit card bills on Amazon</h5>
                                                <div> <a href="#" className="btn btn-success  p-0"><img className=" img-fluid" src="./image/mainimagae/14.jpg" /></a></div>
                                            </div>
                                            <a href="#" >Pay Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 p-0 p-3  tbdr">
                                    <div className="a_mainbox_2 p-3 ">
                                        <div className="a_mainbox_2_inner h-100 w-100 bg-danger">
                                            <div className="bg-warning ">
                                                <h5 >Automotive essentials | Up to 60% off</h5>
                                                <div className="row m-0">
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/10.jpg" />Cleaning accessories</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/11.jpg" />Tyre &amp; rim care</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="pe-1 h-75 img-fluid" src="./image/mainimagae/12.jpg" />Helmates</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/13.jpg" />Vacuum clener</a>
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
                                            <div className="bg-warning ">
                                                <h5>Revamp your home in style</h5>
                                                <div className="row m-0">
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="./image/mainimagae/15.jpg" />Bedsheets,cutains &amp; more</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/16.jpg" />Immunity &amp; Healthcare</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="pe-1 h-75 img-fluid" src="./image/mainimagae/17.jpg" />Home storage</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/18.jpg" />lighting solution</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">Explore all</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 p-0 p-3 tbdr">
                                    <div className="a_mainbox_1 p-3 ">
                                        <div className="a_mainbox_1_inner h-100 w-100 bg-danger">
                                            <div className="bg-warning ">
                                                <h5 >Top rated, premium quality | Amazon Brands</h5>
                                                <div className="row m-0">
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/19.jpg" />Up to 45% off|solimo</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/20.jpg" />up to 45% off|AmazonBasics</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/21.jpg" />Up to 40%|presto!</a>
                                                    </div>
                                                    <div className="col-6 p-0 tbdr">
                                                        <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/22.jpg" />Min. 60% off|symbol</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">show more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="a_main_bot_3 mb-3 p-2 ">
                                <div className="mb-3 "> <h5 className="d-inline-block">Today's Deals</h5><button className="d-inline-block btn btn-link" href="#">see all deals</button></div>
                                <Carousel className="carouselExampleControls2 tbdr">
                                    <Carousel.Item>
                                        <div className="imgcont row">
                                            <div className="col p-0 tbdr">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>

                                    </Carousel.Item>

                                </Carousel>
                            </div>
                            <div className="a_main_bot_4 mb-3  ">
                                <div className="mb-3 "> <h5 className="d-inline-block">Today's Deals</h5><button className="d-inline-block btn btn-link" href="#">see all deals</button></div>
                                <Carousel className="carouselExampleControls2 carouselExampleControls3" >
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>

                                    </Carousel.Item>

                                </Carousel>
                            </div>
                    
                        <div className="a_main_bot_5 row mb-3 m-0">
                            <div className="col-3 p-0 p-3  tbdr">
                                <div className="a_mainbox_5 p-3 ">
                                    <div className="a_mainbox_5_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning ">
                                            <h5 >Everyday Esential</h5>
                                            <div className="row m-0">
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/23.jpg" />Cleaning essential</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/24.jpg" />Immunity &amp; Healthcare</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/25.jpg" />Women Personal Care</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/26.jpg" />Men's grooming</a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">show more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_5 p-3 ">
                                    <div className="a_mainbox_5_inner h-100 w-100 bg-danger">
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
                                <div className="a_mainbox_5 p-3">
                                    <div className="a_mainbox_5_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning ">
                                            <h5>Everyday Esential</h5>
                                            <div className="row m-0">
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/27.jpg" />Cleaning essential</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/28.jpg" />Immunity &amp; Healthcare</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/29.jpg" />Women Personal Care</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/30.jpg" />Men's grooming</a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">show more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_5 p-3 ">
                                    <div className="a_mainbox_5_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning ">
                                            <h5>Give your home classroom a makeover</h5>
                                            <div className="row m-0">
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/19.jpg" />Cabinets &amp; Bookshelves </a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/20.jpg" />Wardrobes</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/21.jpg" />Study Lamps</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/22.jpg" />Study table &amp; chairs</a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">show more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="a_main_bot_6 mb-3">
                        <div className="mb-3 "> <h5 className="d-inline-block">Today's Deals</h5><button className="d-inline-block btn btn-link" href="#">see all deals</button></div>
                                <Carousel className="carouselExampleControls2 carouselExampleControls3 carouuselExampleControls4" >
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>

                                    </Carousel.Item>

                                </Carousel>
                            </div>
                    
                        
                        <div className="a_main_bot_7 text-center mb-3">
                        <a href="#" className="btn btn-success rounded-0  p-0 "><img className="pe-1 img-fluid h-100 w-100" src="../image/mainimagae/fullpage.jpg" /></a>
                        </div>
                        <div className="a_main_bot_8 mb-3 ">
                        <div className="mb-3 "> <h5 className="d-inline-block">Today's Deals</h5><button className="d-inline-block btn btn-link" href="#">see all deals</button></div>
                                <Carousel className="carouselExampleControls2 carouselExampleControls3 " >
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>

                                    </Carousel.Item>

                                </Carousel>
                            
                        </div>  
                        <div className="a_main_bot_9 row mb-3 m-0">

                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_9 p-3 ">
                                    <div className="a_mainbox_9_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning ">
                                            <h5 >School From Home | Online classes made easy</h5>
                                            <div className="row m-0">
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/23.jpg" />Laptops &amp; Projectores</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/24.jpg" />HEadsets &amp; Speakers</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/25.jpg" />Mobile &amp; Accessories</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/26.jpg" />Printer &amp; ink</a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">show more</a>
                                    </div>
                                </div>

                            </div>

                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_9 p-3 ">
                                    <div className="a_mainbox_9_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning ">
                                            <h5 >Pick from these types of masks</h5>
                                            <div className="row m-0">
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/27.jpg" />N95 Mask &amp; respirator</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/28.jpg" />Cloth mask</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/29.jpg" />Kids mask</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/30.jpg" />view the mask store</a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">show more</a>
                                    </div>
                                </div>

                            </div>

                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_9 p-3 ">
                                    <div className="a_mainbox_9_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning ">
                                            <h5 className="p-1">Make hobbies more fun</h5>
                                            <div className="row m-0">
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 p-0 h-100"><img className="pe-1 h-75 img-fluid" src="../image/mainimagae/31.jpg" />Cleaning essential</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/32.jpg" />Immunity &amp; Healthcare</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/33.jpg" />Women Personal Care</a>
                                                </div>
                                                <div className="col-6 p-0 tbdr">
                                                    <a href="#" className="btn btn-success rounded-0 h-100 p-0"><img className="ps-1 h-75 img-fluid" src="./image/mainimagae/34.jpg" />Men's grooming</a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">show more</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_9 p-3 ">
                                    <div className="a_mainbox_9_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning p-0">
                                            <h5>Echo dot smart bulb combo | Just ask Alexa</h5>
                                            <div> <a href="#" className="btn btn-success  p-0"><img className=" img-fluid" src="./image/mainimagae/39.jpg" /></a></div>

                                        </div>
                                        <a href="#" >See more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="a_main_bot_10 mb-3">
                        <div className="mb-3 "> <h5 className="d-inline-block">Today's Deals</h5><button className="d-inline-block btn btn-link" href="#">see all deals</button></div>
                                <Carousel className="carouselExampleControls2 carouselExampleControls3 " >
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>

                                    </Carousel.Item>

                                </Carousel>
                            
                        </div>
                        <div className="a_main_bot_11 mb-3">
                        <div className="mb-3 "> <h5 className="d-inline-block">Today's Deals</h5><button className="d-inline-block btn btn-link" href="#">see all deals</button></div>
                                <Carousel className="carouselExampleControls2 carouselExampleControls3 " >
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="imgcont2 row">
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                            <div className="col p-0 tbdr">1</div>
                                        </div>

                                    </Carousel.Item>

                                </Carousel>
                            
                        </div>   
                        
                        <div className="a_main_bot_12 row mb-3 m-0">

                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_9 p-3 ">
                                    <div className="a_mainbox_9_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning p-0">
                                            <h5 className="p-1">Bring home the fun | Games for all ages</h5>
                                            <div> <a href="#" className="btn btn-success  p-0"><img className=" img-fluid" src="./image/mainimagae/40.jpg" /></a></div>

                                        </div>
                                        <a href="#" >See more</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_9 p-3 ">
                                    <div className="a_mainbox_9_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning p-0">
                                            <h5 className="p-1">Bring home the fun | Games for all ages</h5>
                                            <div> <a href="#" className="btn btn-success  p-0"><img className=" img-fluid" src="./image/mainimagae/41.jpg" /></a></div>

                                        </div>
                                        <a href="#" >See more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_9 p-3 ">
                                    <div className="a_mainbox_9_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning p-0">
                                            <h5 className="p-1">Bring home the fun | Games for all ages</h5>
                                            <div> <a href="#" className="btn btn-success  p-0"><img className=" img-fluid" src="./image/mainimagae/42.jpg" /></a></div>

                                        </div>
                                        <a href="#" >See more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 p-0 p-3 tbdr">
                                <div className="a_mainbox_9 p-3 ">
                                    <div className="a_mainbox_9_inner h-100 w-100 bg-danger">
                                        <div className="bg-warning p-0">
                                            <h5 className="p-1">Bring home the fun | Games for all ages</h5>
                                            <div> <a href="#" className="btn btn-success  p-0"><img className=" img-fluid" src="./image/mainimagae/43.jpg" /></a></div>

                                        </div>
                                        <a href="#" >See more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </React.Fragment>

            </Layout >
        )
    }
}


Home.propTypes = {}
export default Home