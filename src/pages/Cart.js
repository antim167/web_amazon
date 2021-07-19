import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'

/**
* @author
* @class Cart
**/

class Cart extends Component {
    state = {}
    render() {
        return (
            <>
                <Layout>
                    <div className="cartcontainer border ">
                        <div className="row m-3">
                            <div className="col-9  a_anch_dec ">
                                <div className="bg-white mb-2 text-decoration-none ">
                                    <h2 className=" p-2 pb-2 border-bottom">Shopping Cart</h2>
                                    <div className="row m-0 pt-2 pb-2 border-bottom">
                                        <div className="col-3  d-flex align-items-center ">
                                            <div className="form-check float-star">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label className="form-check-label" for="flexCheckChecked"></label>
                                            </div>
                                            <a href="#"><img className="img-fluid" src="https://m.media-amazon.com/images/I/617Ew+gWnLL._AC_AA180_.jpg" /></a>
                                        </div>
                                        <div className="col-7 ">
                                            <h5><a href="#" className="text-dark">ASUS Vivo AiO V222, 21.5" FHD, Intel Core i3-10110U 10th Gen, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/with Wireless Keyboard &amp; Mouse/Black/4.8 Kg), V222FAK-BA002TS</a></h5>
                                            <span className="d-block">In stock
                                            </span>
                                            <span>
                                                Eligible for FREE Shipping
                                            </span>
                                            <div>
                                                <a href="# d-block "><img className="deliver_con" src="	https://m.media-amazon.com/images/G/31/easyship-SVDRVS/amazon-delivered-DSVVSR._CB485933315_.png " /></a>
                                                <span> Amazon Delivered</span>
                                            </div>
                                            <span> <span className="fw-bold">Size name:</span> <span>2 Yr Premium Care</span></span>
                                            <div >
                                                <ul className="nav">
                                                    <li className="nav-item a_anch">
                                                        <a className="nav-link" href="#">
                                                            <select className="form-control form-control-sm">
                                                                <option selected>Qty:-1</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item border-end">
                                                        <a className="nav-link text-dark" href="#">Delete</a>
                                                    </li>
                                                    <li className="nav-item border-end">
                                                        <a className="nav-link text-dark" href="#">see more like this</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <span className="fw-bold fs-6 float-end"> ₹ 1,595.00</span>
                                        </div>
                                    </div>
                                    <div className="row m-0 pt-2 pb-2 border-bottom">
                                        <div className="col-3  d-flex align-items-center ">
                                            <div className="form-check float-star">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label className="form-check-label" for="flexCheckChecked"></label>
                                            </div>
                                            <a href="#"><img className="img-fluid" src="https://m.media-amazon.com/images/I/617Ew+gWnLL._AC_AA180_.jpg" /></a>
                                        </div>
                                        <div className="col-7 ">
                                            <h5><a href="#" className="text-dark">ASUS Vivo AiO V222, 21.5" FHD, Intel Core i3-10110U 10th Gen, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/with Wireless Keyboard &amp; Mouse/Black/4.8 Kg), V222FAK-BA002TS</a></h5>
                                            <span className="d-block">In stock
                                            </span>
                                            <span>
                                                Eligible for FREE Shipping
                                            </span>
                                            <div>
                                                <a href="# d-block "><img className="deliver_con" src="	https://m.media-amazon.com/images/G/31/easyship-SVDRVS/amazon-delivered-DSVVSR._CB485933315_.png " /></a>
                                                <span> Amazon Delivered</span>
                                            </div>
                                            <span> <span className="fw-bold">Size name:</span> <span>2 Yr Premium Care</span></span>
                                            <div >
                                                <ul className="nav">
                                                    <li className="nav-item a_anch">
                                                        <a className="nav-link" href="#">
                                                            <select className="form-control form-control-sm">
                                                                <option selected>Qty:-1</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item border-end">
                                                        <a className="nav-link text-dark" href="#">Delete</a>
                                                    </li>
                                                    <li className="nav-item border-end">
                                                        <a className="nav-link text-dark" href="#">see more like this</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <span className="fw-bold fs-6 float-end"> ₹ 1,595.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white   ">
                                    <ul className="nav nav-tabs cartTabpane border-botttom">
                                        <li className="nav-item ">
                                            <a className="nav-link text-dark text-decoration-none" data-bs-toggle="tab" href="#noitemsaved"> No items saved for later</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-dark text-decoration-none active" data-bs-toggle="tab" href="#buyitagain">Buy it again</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane container fade" id="noitemsaved">.
                                        </div>
                                        <div className="tab-pane container active " id="buyitagain">
                                            <div className="row m-0 pt-2 pb-2 border-bottom">
                                                <div className="col-3  d-flex align-items-center ">
                                                    <div className="form-check float-star">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                        <label className="form-check-label" for="flexCheckChecked"></label>
                                                    </div>
                                                    <a href="#"><img className="img-fluid" src="https://m.media-amazon.com/images/I/617Ew+gWnLL._AC_AA180_.jpg" /></a>
                                                </div>
                                                <div className="col-7 ">
                                                    <h5><a href="#" className="text-dark">ASUS Vivo AiO V222, 21.5" FHD, Intel Core i3-10110U 10th Gen, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/with Wireless Keyboard &amp; Mouse/Black/4.8 Kg), V222FAK-BA002TS</a></h5>
                                                    <span className="d-block">In stock
                                                    </span>
                                                    <span>
                                                        Eligible for FREE Shipping
                                                    </span>
                                                    <div>
                                                        <a href="# d-block "><img className="deliver_con" src="	https://m.media-amazon.com/images/G/31/easyship-SVDRVS/amazon-delivered-DSVVSR._CB485933315_.png " /></a>
                                                        <span> Amazon Delivered</span>
                                                    </div>
                                                    <span> <span className="fw-bold">Size name:</span> <span>2 Yr Premium Care</span></span>
                                                    <div >
                                                        <ul className="nav">
                                                            <li className="nav-item a_anch">
                                                                <a className="nav-link" href="#">
                                                                    <select className="form-control form-control-sm">
                                                                        <option selected>Qty:-1</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                    </select>
                                                                </a>
                                                            </li>
                                                            <li className="nav-item border-end">
                                                                <a className="nav-link text-dark" href="#">Delete</a>
                                                            </li>
                                                            <li className="nav-item border-end">
                                                                <a className="nav-link text-dark" href="#">see more like this</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <span className="fw-bold fs-6 text-danger"> ₹ 1,595.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="col-3 p-0  tbdr">
                                <div className="cart_banner tbdr mb-3">
                                    <img className="img-fluid w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"/>
                                </div>
                                <div className="cartTotalItem bg-white tbdr">
                                    <span><span className=" ms-1 d-block float-start cart_spritesheet cart_check_con cart_check_pos"></span>
                                    <span className="float-start">Part of your order qualifies for FREE   </span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}


Cart.propTypes = {}
export default Cart