import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../component/Header'
import Footer from '../component/Footer'

/**
* @author
* @class Delivery
**/

class Delivery extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container p-0  delivery">
                    <header className=" d-flex align-items-center">
                        <img className="" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif" />
                    </header>
                    <div className="a_deli_main pt-3 border-top pb-5">
                        <div className="pb-5">
                            <h3>Select a delivery address</h3>
                            <p className="a_deli_fs">Enter the name and address you'd like your order to be delivered to. Please indicate also whether your invoice address is the same as the delivery address entered. When finished, click the "Continue" button.  Or, if you're sending items to more than one address, click the "Add another address" button to enter additional addresses.</p>
                        </div>

                        <h5 className="pt-3 pb-2 border-top">Add a new address</h5>
                        <div className="row  m-0">
                            <div className="col-6">
                                <form >
                                    <div className="mb-3">
                                        <label for="l" className="form-label fw-bold">Country/Region</label>
                                        <select className="form-select form-select-sm" >
                                            <option selected>india</option>
                                            <option value="india">india</option>

                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="fullname" className="form-label fw-bold">Full name</label>
                                        <input type="email" className="form-control form-control-sm" id="fullname" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="mob_no" className="form-label fw-bold">Mobile number</label>
                                        <input type="email" className="form-control form-control-sm" id="mob_no" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="pincode" className="form-label fw-bold">Pincode</label>
                                        <input type="email" className="form-control form-control-sm" id="pincode" placeholder="6-digits [0-6] PIN code" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="flatHouse" className="form-label fw-bold">Flat, House no., Building, Company, Apartment</label>
                                        <input type="email" className="form-control form-control-sm" id="flatHouse" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="sectorvillage" className="form-label fw-bold">Area, Street, Sector, Village</label>
                                        <input type="email" className="form-control form-control-sm" id="sectorvillage" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="landmark" className="form-label fw-bold">Landmark</label>
                                        <input type="email" className="form-control form-control-sm" id="landmark" placeholder="" />
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-6 p-0">
                                            <div className="mb-3 ">
                                                <label for="towncity" className="form-label fw-bold">Town/City</label>
                                                <input type="email" className="form-control form-control-sm" id="towncity" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-6 p-0">
                                            <div className="mb-3 ps-2">
                                                <label for="l" className="form-label fw-bold">State</label>
                                                <select className="form-select form-select-sm" aria-label="Default select example">
                                                    <option selected>choose a state</option>
                                                    <option value="mp">mp</option>
                                                    <option value="mp">mp</option>
                                                    <option value="mp">mp</option>
                                                    <option value="mp">mp</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="makeadreess" />
                                        <label className="form-check-label fw-bold" for="makeadreess">
                                            Make this my default address
                                        </label>
                                    </div>
                                    <h5>Add delivery instructions</h5>
                                    <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
                                    <div className="mb-3">
                                        <label for="l" className="form-label fw-bold">Address Type</label>
                                        <select className="form-select form-select-sm" aria-label="Default select example">
                                            <option selected>choose a state</option>
                                            <option value="mp">mp</option>
                                            <option value="mp">mp</option>
                                            <option value="mp">mp</option>
                                            <option value="mp">mp</option>
                                        </select>
                                    </div>
                                    <button className="btn amznbtn " >Use this address</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <footer className="border pt-3 a_deli_fs">
                        <div className="   d-flex justify-content-center a_anch_dec">
                            <a href="#" className="border-end pe-1 ">Conditions of Use </a>
                            <a href="#" className="ps-1 "> Privacy Notice </a>
                            <span>© 2012-2020, Amazon.com, Inc. and its affiliates</span>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}


Delivery.propTypes = {}
export default Delivery