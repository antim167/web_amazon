import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class PaymentMeth
**/

class PaymentMeth extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className="pay_method ">
          <div className="container ">
            <div className=" ">
              <img className="mt-3 mb-5" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif" />
            </div>
            <div className="pay_main ">
              <h3>Select a payment method</h3>
              <div className="row m-0">
                <div className="col-9  p-2">
                  <div className="border  p-2">
                    <h6 className="mb-2 mt-1">Another payment method</h6>
                    <div className="border-top">
                      <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                  <span className=" d-block fw-bold mb-2">Add Debit/Credit/ATM Card</span>
                                  <span className="d-block float-start  me-1  bank_sprit visa"></span>
                                  <span className="d-block float-start  me-1 bank_sprit visa1"></span>
                                  <span className="d-block float-start  me-1 bank_sprit visa2"></span>
                                  <span className="d-block float-start  me-1 bank_sprit visa3"></span>
                                  <span className="d-block float-start  me-1 bank_sprit visa4"></span>
                                  <span className="d-block float-start  me-1 bank_sprit visa5"></span>
                                </label>
                              </div>
                            </button>
                          </h2>
                          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                              <span className="d-block">We’ll save this card for your convenience. Remove it by going to Your Account section.</span>
                              <div className="imgcon a_anch_dec mt-2 ">
                                <img className=" img-fluid h-75 me-2" src="https://images-eu.ssl-images-amazon.com/images/G/01/payments-portal/r1/PlusIcon._CB485933946_.gif" />
                                <img className="img-fluid h-75 me-2" src="https://images-eu.ssl-images-amazon.com/images/G/01/payments-portal/r1/add-payment-method/card-logo-compact._CB478583243_.gif" />
                                <a href="#" className=" text-decoration-none">Add a credit or debit card</a><span> :- Amazon.com accepts all major credit &amp;  cards</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                  <span className="fw-bold">Net Banking</span>
                                  <form className="m-2">
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                      <option selected>Choose a option</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </form>
                                </label>
                              </div>
                            </button>
                          </h2>
                          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">For faster payment and instant refund, please use UPI Why?</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" for="flexRadioDefault3">
                                  <span className="fw-bold">Other UPI Apps</span>
                                </label>
                              </div>
                            </button>
                          </h2>
                          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                              <form>
                                <label for="upiid" className="form-label  a_font_size"> Please enter your UPI ID</label>
                                <div className="row m-0">
                                  <div className="col-3 p-1">
                                    <input type="email" className="form-control" id="upiid" placeholder="Ex:mobilenumber &amp; UPI ID" />
                                  </div>
                                  <div class="col-1 p-1">
                                    <button type="submit" className="btn amznbtn mb-3">Verify</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                <label className="form-check-label" for="flexRadioDefault4">
                                  <span className="fw-bold">EMI</span>
                                </label>
                              </div>
                            </button>
                          </h2>
                          <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                              <form>

                                <select className="form-select form-select-sm w-25" aria-label=".form-select-sm example">
                                  <option selected>select EMI options</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </form>

                              Amazon Pay Later option is not available for this order. Why?.</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3  ps-2">
                  <button className="btn border  btn-light border w-100">
                    <button className="btn mt-1 w-100 btn-sm border amznbtn" >Continue</button>
                    You can review this order before it's final
                  </button>

                </div>
              </div>
              <div className="row m-0 mt-4 mb-3">
                <div className="col-9 ">
                  <h5 className="mb-2 ">More payment options</h5>
                  <div className="row   border-top">
                    <div className=" col-10 a_anch_dec  ">
                      <h6 className="mt-3">Gift Cards, Vouchers &amp; Promotional Codes</h6>
                      <a href="#" className="ms-2 mt-2 a_font_size">Enter a gift card, voucher or promotional code</a>
                    </div >
                    <div className="col-2 p-2">
                      <img className="img-fluid " src="https://images-eu.ssl-images-amazon.com/images/G/31/payments-portal/r1/gc._CB485935783_.gif" />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <button className="btn border  btn-light border w-100">
                    <button className="btn mt-1 w-100 btn-sm border amznbtn" >Continue</button>
                    You can review this order before it's final
                  </button>
                </div>
              </div>
            </div>
            <div className="  mb-3 a_font_size pay_footer  border-top">
              <div className=" mt-3  d-flex justify-content-center a_anch_dec mb-2">
                <span >Need help? Check our <a href="#">help pages</a> or <a href="#">contact us 24x7</a></span>
              </div>
              <div className="   d-flex justify-content-center a_anch_dec">
                <a href="#" className="border-end pe-1 ">Conditions of Use </a>
                <a href="#" className="ps-1 "> Privacy Notice </a>
                <span>© 2012-2020, Amazon.com, Inc. and its affiliates</span>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


PaymentMeth.propTypes = {}
export default PaymentMeth