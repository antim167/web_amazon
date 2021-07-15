import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Register
**/

class Register extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="row justify-content-center signinforcont">
          <div className="col-4">
            <a href="#" className="mx-auto d-block position-relative  alogo spritesheet sprt_pos mt-3 mb-2">
              <div className="ccName spritesheet position-absolute"></div>
            </a>
            <div className="border p-4 a_anch_dec">
              <form className="">
                <h2>Create Account</h2>
                <div className="mb-3 mt-3">
                  <label for="name" className="form-label fw-bolder">Your name</label>
                  <input type="name" className="form-control" id="name" placeholder="" />
                </div>
                <div className="mb-3">
                  <label for="mobno" className="form-label fw-bold">Mobile number</label>
                  <input type="email" className="form-control" id="mobno" placeholder="Mobile Number" />
                </div>
                <div className="mb-3">
                  <label for="emil" className="form-label fw-bold">Email (optional)</label>
                  <input type="email" className="form-control" id="emil" placeholder="" />
                </div>
                <div className="mb-3" >
                  <label for="exampleInputPassword1" className="form-label fw-bold">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="At least 6 chracter" />
                  <span>Passwords must be at least 6 characters.</span>
                </div>
                <p className="mb-3">We will send you a text to verify your phone.
                  Message and Data rates may apply.</p>
                <button className="btn amznbtn w-100  "> continue</button>
                <p className="mt-5">
                <span className=" d-block " >Already have an account? <a href="#">Sign in </a> .</span>
                <span>Buying for work ? <a href="#">Create a free business account</a> .</span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <ul className="nav justify-content-center a_anch_dec">
          <li className="nav-item">
            <a className="nav-link " href="#"> Conditions of Use </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Privacy Notice </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Help</a>
          </li>
        </ul>
        <p className="text-center">© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </>
    )
  }
}


Register.propTypes = {}
export default Register