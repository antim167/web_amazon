import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

/**
* @author
* @class OrderHistory
**/

class OrderHistory extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <div className="odr_his_con">
                    <div className=" container  ">
                        <div className="">
                            <nav className="ord_his_heder_brdcrm" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a className="text-decoration-none" href="#">Your account</a></li>
                                    <li className="breadcrumb-item active">your order</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="row ">
                            <div className="col-6 ">
                                <h3>your order</h3>
                            </div>
                            <div className="col-6 ">
                                <div className="row  ">
                                    <div className="col-7 p-0 pt-2 ">
                                        <input type="text" className="form-control form-control-sm" placeholder="search all order" aria-label="First name" />
                                    </div>
                                    <div className="col p-2 ">
                                        <button className="btn btn-dark btn-sm" type="submit">search order</button>
                                    </div>
                                </div>

                            </div>
                            <div className="a_anch_dec">
                                <ul className="nav nav-tabs  cartTabpane border-botttom">
                                    <li className="nav-item">
                                        <a className="nav-link  active text-decoration-none  border-0" data-bs-toggle="tab" href="#order"> Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-decoration-none  border-0" data-bs-toggle="tab" href="#buyagain">Buy again</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-decoration-none  border-0" data-bs-toggle="tab" href="#cancelledorder">Cancelled Order</a>
                                    </li>
                                </ul>
                                <div className="tab-content a_anch_dec">
                                    <div className="tab-pane container p-0 active" id="order">
                                        <div className="m-3">
                                        <strong><span>0</span> orders </strong>placed in
                                        <select className="ms-2 d-inline-block w-25 form-select form-select-sm" aria-label="Default select example">
                                            <option selected>past 3 month</option>
                                            <option value="1">2021</option>
                                            <option value="2">2020</option>
                                            <option value="3">2019</option>
                                        </select>
                                        <p className="m-5 text-center">You have not placed any orders in past 3 months.<a href="#"> View orders in <span className="year">2021</span>  </a></p>
                                        </div>
                                    </div>
                                    <div className="tab-pane container p-0 fade" id="buyagain">b</div>
                                    <div className="tab-pane container p-0 fade" id="cancelledorder">
                                        <div className="card">
                                            <div className="card-header p-0 m-0">
                                                <div className="row m-0 p-2 ">
                                                    <div className="col-2 ">ORDER PLACED 6 February 2021</div>
                                                    <div className="col-1 "> TOTAL ₹0.00</div>
                                                    <div className="col-1 ">ship to
                                                        <a href="#"> Anil</a></div>
                                                    <div className="col-5 "></div>
                                                    <div className="col-3 ">
                                                        <a href="#" className="text-dark">ORDER # 402-1947851-0143545</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Cancelled</h5>
                                                <div className="row m-0">
                                                    <div className="col-2 pt-2 pb-0 ps-0 pe-0 ">
                                                        <img className="pe-1 h-75 img-fluid" src="../image/mainimagae/27.jpg" />
                                                    </div>
                                                    <div className="col-7 p-0 "><a href="#">XP-PEn Artist 12 pro 11.6 inch Drawing Dispaly Table Full HD with Tilt Support 8192 Levels Of Pressure No parallax</a></div>
                                                    <div className="col-3 p-0"> <button className="btn btn-light btn-sm border w-100" type="submit">Archive order</button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3">
                                            <div className="card-header p-0 m-0">
                                                <div className="row m-0 p-2">
                                                    <div className="col-2 ">ORDER PLACED 6 February 2021</div>
                                                    <div className="col-1 "> TOTAL ₹0.00</div>
                                                    <div className="col-1 ">ship to
                                                        <a href="#"> Anil</a></div>
                                                    <div className="col-5 ">a</div>
                                                    <div className="col-3 ">
                                                        <a href="#" className="text-dark">ORDER # 402-1947851-0143545</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Cancelled</h5>
                                                <div className="row m-0">
                                                    <div className="col-2 pt-2 pb-0 ps-0 pe-0 ">
                                                        <img className="pe-1 h-75 img-fluid" src="../image/mainimagae/27.jpg" />
                                                    </div>
                                                    <div className="col-7 p-0 "><a href="#">XP-PEn Artist 12 pro 11.6 inch Drawing Dispaly Table Full HD with Tilt Support 8192 Levels Of Pressure No parallax</a></div>
                                                    <div className="col-3 p-0"> <button className="btn btn-light btn-sm border w-100" type="submit">Archive order</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}


OrderHistory.propTypes = {}
export default OrderHistory