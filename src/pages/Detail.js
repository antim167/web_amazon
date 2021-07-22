import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'
import { faCartPlus, faChevronDown, faChevronRight, faLock, faMapMarkerAlt, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactImageMagnify from 'react-image-magnify';

/**
* @author
* @class Detail
**/

class Detail extends Component {
  //1.property
  state = {
    prodSrollFix: 'position-reletive '
  }
  //2.constructor
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.detailHandleScroll)
  }
  detailHandleScroll = () => {
    console.log(window.scrollY + 'detail')
    if (window.scrollY < 90) {
      this.setState({ prodSrollFix: 'position-reletive t-0' })
    }
    else if (window.scrollY >= 90 && window.scrollY <= 1200) {
      this.setState({ prodSrollFix: 'position-fixed top-0' });
    } else {
      this.setState({ prodSrollFix: 'position-reletive t1225' })
    }
  }
  render() {
    return (
      <Layout>
        <div className="a_main a_dtl_main  mx-auto tbdr">
          <div className="a_dtl_top_banner tbdr"></div>
          <div className="row  m-0 a_anch_dec">
            <div className="col-9 p-0 tbdr">
              <div className="row m-0 ">
                <div className="col-1 p-0 tbdr ">
                  <ul className={'a_dtl_prothumnil nav flex-column ' + this.state.prodSrollFix}>
                    <li className="nav-item mt-2 p-2  ">
                      <a className="nav-link" href="#">
                        <img className=" border img-fluid" src=" ./image/mainimagae/laptop.jpg" />
                      </a>
                    </li>
                    <li className="nav-item p-2">
                      <a className="nav-link " href="#"> <img className=" border img-fluid" src=" ./image/mainimagae/laptop.jpg" /></a>
                    </li>
                    <li className="nav-item p-2">
                      <a className="nav-link" href="#"> <img className=" border img-fluid" src=" ./image/mainimagae/laptop.jpg" /></a>
                    </li>
                    <li className="nav-item p-2">
                      <a className="nav-link " href="#"> <img className=" border img-fluid" src=" ./image/mainimagae/laptop.jpg" /></a>
                    </li>
                  </ul>
                </div>
                <div className="col-5 p-0 tbdr  ">
                  <div className={'a_dtl_prodMainImage ' + this.state.prodSrollFix}>
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: " ./image/mainimagae/laptop.jpg"
                      },
                      largeImage: {
                        src: " ./image/mainimagae/laptop.jpg",
                        width: 1200,
                        height: 1000
                      },
                      shouldUsePositiveSpaceLens: true
                    }} />
                  </div>
                </div>
                <div className="col-6 border-bottom tbdr">
                  <h4>ASUS Vivo AiO V222, 21.5" FHD, Intel Core i3-10110U 10th Gen, All-in-One Desktop (4GB/1TB HDD/Office 2019/Windows 10/Integrated Graphics/with Wireless Keyboard &amp; Mouse/Black/4.8 Kg), V222FAK-BA002TS</h4>
                  <a href="#">Visit the ASUS Store</a>
                  <div>
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                    <FontAwesomeIcon className="ms-2 me-2" icon={faChevronDown} />
                    <a href="#">5 Rating</a>

                  </div>
                  <a href="#" className=""> | 8 answered question</a>
                  <hr/>
                  
                  <span className="d-block">M.R.P:₹<span className=" a_price_clr text-decoration-line-through"> 50,406.00</span></span>
                  <span className="d-block">Price:<span className="  a_price_clr fs-4" > ₹ 35,406.00</span></span>
                  <span className="d-block">Your save:<span className="  a_price_clr fs-4" > ₹ 15,406.00</span></span>
                  <div className="text-center ">inclusive all taxes</div>
                  <a href="#">Free delivery</a>
                  <span> Thusday,8 july</span>
                  <a href="#">Details</a>
                  <span className="d-block fs-6"><span className="fw-bold">EMI</span> <span> starts at ₹1,855. No Cost EMI available</span>
                   <a href="#"> EMI Option<FontAwesomeIcon className="" icon={faChevronDown} /></a>
                   </span>
                  <hr />
                  <div className="fs-6 fw-bold">About item</div>
                  <div>10th Gen Intel Core i3-10110U, 2.1 GHz Base Speed, Up to 4.1 GHz Turbo Boost Speed, 2 cores, 4 Threads, 4MB Cache
                    Memory &amp; Storage: 4GB DDR4 SO-DIMM 2666MHz RAM with | Storage: 1TB SATA 5400RPM 2.5" HDD
                    Graphics: Integrated Intel UHD Graphics
                    Display: 54.6 cm (21.5) , Full HD (1920 x 1080) 16:9, 250nits LED-Backlit LCD, IPS-level Panel, Anti-glare display, sRGB: 100%, Screen-to-body ratio: 87%
                    Software Included: Pre-Install MS Office Home and Student 2019 with lifetime validity | Operating System: Pre-loaded Windows 10 Home with lifetime validity
                    Other: 720p HD camera | Wi-Fi 5 (802.11ac) (Dual band) 1*1 | Bluetooth 5.0 | 2 x 3 W Stereo Built-in speaker | Built-in array microphone
                    Side I/O Ports: 1x Kensington lock | 1x 3.5mm combo audio jack | 1x USB 2.0 Type-A
                    Rear I/O Ports : 1x DC-in | 1x RJ45 LAN jack for LAN insert | 1x HDMI 1.4 | 4x USB 3.2 Gen 1 Type-A
                    In The Box: All in One (AIO), Wireless Golden Keyboard, Wireless Optical Mouse, Power Adaptor and User Manual
                    Warranty: 1 year Onsite Domestic Warranty from ASUS covering manufacturing defects. Register on brand website to activate warranty. For product related queries contact us on: [ 18002090365 ] or Email us at : rc_india@asus.com</div>
                    <a href="#productdtl"> See more product details</a>
                </div>
              
              </div>

            </div>
            <div className=" detail_accord col-3 ps-4 pe-4 border">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" checked="checked" name="flexRadioDefault" id="flexRadioDefault" />
                        <label className="form-check-label" for="flexRadioDefault1">
                          <div className="fw-bold"> With exchange</div>
                          <span className="a_price_clr mt-2 "> Up to ₹ 16,000</span>

                        </label>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <FontAwesomeIcon className="me-1" icon={faMapMarkerAlt} />
                      <a href="#">select you address</a>
                      <button type="button" className="btn btn-light border d-block w-100 p-0  mt-2 mb-2">
                        choose product to exchange <FontAwesomeIcon className="ms-1" icon={faChevronRight} /> </button>
                      <a href="#" className="d-block">How does Exchange Work</a>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" checked="checked" name="flexRadioDefault" id="flexRadioDefault" />
                        <label className="form-check-label" for="flexRadioDefault1">
                          <div className="fw-bold"> Without exchange</div>
                          <span className="a_price_clr mt-2 "> Up to  ₹44,999</span>
                          <span> ₹<span className="text-decoration-line-through"> 51,000.00</span></span>

                        </label>
                      </div>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div>
                        <span className="d-inline-block fw-bold" >Quantity:-</span>
                        <select className=" d-inline-block from-select-sm " aria-label="Default select example">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <button type="button" className="btn amznbtn border rounded-pill d-block w-100 mt-2 mb-2">
                        <FontAwesomeIcon className="mt-1  float-start" icon={faCartPlus} />
                        ADD TO CART
                      </button>
                      <button type="button" className="btn amznbtn  border rounded-pill d-block w-100  mt-2 mb-2">
                        <FontAwesomeIcon className=" mt-1 float-start" icon={faPlay} />
                        BUY NOW
                      </button>
                      <div> <FontAwesomeIcon className="me-3" icon={faLock} /> <a href="#">Secure Transition</a></div>
                      <form className="mt-2 mb-2">
                        <div className="form-check">
                          <input className="form-check-input  " type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label ms-1" for="flexCheckDefault">
                            Add gift option
                          </label>
                        </div>
                      </form>
                      <div>  <FontAwesomeIcon className="me-3" icon={faMapMarkerAlt} />  <a href="#">Select deliver location</a></div>
                      <hr/>
                      <button type="button " className="btn btn-light border w-100">Add to wish list</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="a_dtl_prodContBottom  border-top border-bottom m-1"></div>
          <div className="a_dtl_havQ  border-top border-bottom m-1"></div>
          <div className="a_dtl_prodRelItem  border-top border-bottom m-1">
            <h5>
              product releted item
            </h5>
          </div>
          <div className="a_dtl_custRev  border-top border-bottom m-1">
            <h5>
              customer who review
            </h5>

          </div>
          <div className="a_dtl_prodinfo" id="productdtl">
            <h5 className="text-warning mb-3">Product information</h5>
            <div>Pattern name<span className="fw-bold  mb-4">Lenovo IdeaPad 5</span></div>
            <div className="row m-0">
              <div className="col ">
                <h5 className=" mb-3">Technical Details</h5>
                <table className="table border-top">
                  <thead>
                    <tr>
                      <th className="w-50 table-light" cope="col">#</th>
                      <th scope="col">First</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="w-50 table-light" scope="row">1</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th className="w-50 table-light" scope="row">2</th>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <th className=" w-50 table-light" scope="row">3</th>
                      <td >Larry the Bird</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col ">
                <h5 className=" mb-3">Additional Information</h5>
                <table className="table border-top">
                  <thead>
                    <tr>
                      <th className="w-50 table-light" cope="col">#</th>
                      <th scope="col">First</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="w-50 table-light" scope="row">1</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th className="w-50 table-light" scope="row">2</th>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <th className=" w-50 table-light" scope="row">3</th>
                      <td >Larry the Bird</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}


Detail.propTypes = {}
export default Detail