import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class SignIn

**/

class SignIn
  extends Component {
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
                <h2>Sign-In</h2>
                <div className="mb-3">
                  <label for="mobno" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="mobno" placeholder="" />
                </div>
                <button className="btn amznbtn w-100 mb-3"> continue</button>
                <p className="mb-3 ">By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a> .</p>
                <a href="#">Need help?</a>
              </form>
            </div>
            <hr />
            <p className=" text-center">New to Amazon</p>
            <button className="btn btn-light w-100 mb-3 border"> Create Your Amazon Account</button>
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
SignIn.propTypes = {}
export default SignIn
