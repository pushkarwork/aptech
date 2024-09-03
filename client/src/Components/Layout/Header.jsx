import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-default ">
                <div className="container-fluid header-section w3l">

                    <div className="navbar-header w3">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand logo w3-layouts" to="/">
                            <h1><span className="head w3l"><i className="fa fa-mobile" aria-hidden="true"></i><sup><i className="fa fa-cog" aria-hidden="true"></i></sup></span>E-services</h1>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse header" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav list w3">
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="#about" className="scroll">About</Link></li>
                            <li><Link to="#services" className="scroll"> Services</Link></li>
                            <li><Link to="#portfolio" className="scroll">Portfolio</Link></li>
                            <li><Link to="#test" className="scroll">Testimonials</Link></li>
                            <li><Link to="#contact" className="scroll">Contact</Link></li>
                        </ul>

                        <div className="w3ls-social-icons">
                            <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
                                <li><Link to="#" className="facebook">
                                    <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                                    <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></Link></li>
                                <li><Link to="#" className="twitter">
                                    <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                                    <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></Link></li>
                                <li><Link to="#" className="instagram">
                                    <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                                    <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></Link></li>
                                <li><Link to="#" className="pinterest">
                                    <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                                    <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Header
