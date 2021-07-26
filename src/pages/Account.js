import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

/**
* @author
* @class Account
**/

class Account extends Component {
    //1.property
    state = {}
    //2.constructor

    //3.method
    render() {
        return (
            <Layout>
                <div className="a_account_con tbdr">
                    <div className="container pb-5 border-bottom">
                        <h2 className=" ps-5 mt-2 mb-1">Your Account</h2>
                        <div className="row m-0 ms-3 ">
                            <div className="col-4  p-4">
                                <a href="#" className="text-decoration-none text-dark">
                                    <div className="row border pt-3 pb-3 m-0">
                                        <div className="col-3  ">
                                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"/>
                                        </div>
                                        <div className="col-9">
                                            <h5>Your orders</h5>
                                            <span>Track,return or but thing again</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4  p-4">
                                <a href="#" className="text-decoration-none text-dark">
                                    <div className="row border pt-3 pb-3 m-0">
                                        <div className="col-3">
                                       <img className="img-fluid"  src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png"/>
                                        </div>
                                        <div className="col-9">

                                            <h5>Login or security</h5>
                                            <span>Edit,login,name,mobile &amp; number</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-4  p-4">
                                <a href="#" className="text-decoration-none text-dark">
                                    <div className="row border pt-3 pb-3 m-0">
                                        <div className="col-3">
                                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png"/>
                                        </div>
                                        <div className="col-9">
                                            <h5>Prime</h5>
                                            <span>view benifit and payment setting</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row m-0 ms-3 mt-3 ">
                            <div className="col-4 p-4">
                                <a href="#" className="text-decoration-none text-dark">
                                    <div className="row border pt-3 pb-3 m-0">
                                        <div className="col-3 p-0">
                                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png" />
                                        </div>
                                        <div className="col-9">
                                            <h5>Your Address</h5>
                                            <span>Edit addresses for order and gifts </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-4 p-4 ">
                                <a href="#" className="text-decoration-none text-dark">
                                    <div className="row border pt-4 pb-4 m-0">
                                        <div className="col-3 p-0">
                                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png"/>
                                        </div>
                                        <div className="col-9">

                                            <h5>Paymeny Option</h5>
                                            <span>Edit or add Payment method</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-4 p-4">
                                <a href="#" className="text-decoration-none text-dark">
                                    <div className="row border pt-3 pb-3 m-0">
                                        <div className="col-3 p-0">
                                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png"/>
                                        </div>
                                        <div className="col-9">
                                            <h5>Amazon Pay balance</h5>
                                            <span>Add to money to your accoutn</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}


Account.propTypes = {}
export default Account