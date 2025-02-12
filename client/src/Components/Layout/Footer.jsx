import React from 'react'
import "../../assets/css/Footer.css"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="footerC">

            <div className="footer">
                <div className=" footer-left">
                    <h2><Link className='link' to="/">AP TECHNOLOGIES</Link></h2>
                    <p>Seamless Web Design for an Unforgettable Online Experience.</p>

                </div>
                <div className=" footer-right">


                    <h4>Information </h4>
                    <ul>
                        <li><Link to="/" className="active link">Home</Link></li>
                        <li><Link to="/about" className="scroll link">About</Link></li>
                        <li><Link to="/services" className="scroll link"> Services</Link></li>
                        <li><Link to="/contact" className="scroll link">Contact</Link></li>

                    </ul>


                </div>
                <div className=" sign-gd-two">
                    <h4>Address</h4>
                    <div className="w3-address">
                        <div className="w3-address-grid">
                            <div className="w3-address-left">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <h6>Phone Number</h6>
                            </div>
                            <div className="w3-address-right">
                                <p>+91 87000-87827 <br /> +91 70159-80747</p>


                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="w3-address-grid">
                            <div className="w3-address-left">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <h6>Email Address</h6>
                            </div>
                            <div className="w3-address-right">

                                <p>Email :<Link to="mailto:theaptechh@gmail.com" id='email'>theaptechh@gmail.com</Link></p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="w3-address-grid">
                            <div className="w3-address-left">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <h6>Location</h6>
                            </div>
                            <div className="w3-address-right">

                                <p>Office:1 & 2 ground floor, Badarpur, Delhi, IND

                                </p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <p className="copy-right">&copy;2018 E-services.| All rights reserved | </p>
        </div>

    )
}

export default Footer
