import React from 'react'
import "../../assets/css/Services.css"
import { Link } from "react-router-dom"
const Services = () => {
    return (
        <div className="services" id="services">
            <div className="container mainC">
                <div className="w3-head-all ">
                    <h3>Services</h3>
                </div>

                <div className="w3-services-grids">
                    <div className="card" >
                        <img src="/images/design.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Website Design and Development</h5>
                            <p className="card-text">We ensure websites are mobile-friendly and look good on all devices</p>
                            <Link to="/portfolio" className="btn btn-primary">Know More...</Link>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="/images/Shopping.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Solutions</h5>
                            <p className="card-text">we provide a range of services ensures that your clients' online stores are well-designed, functional, and secure.</p>
                            <Link to="/portfolio" className="btn btn-primary">Know More...</Link>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="/images/seo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Search Engine Optimization</h5>
                            <p className="card-text">We optimize website content, meta tags, and structure for search engines.</p>
                            <Link to="/portfolio" className="btn btn-primary">Know More...</Link>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="/images/support.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Website Maintenance and Support</h5>
                            <p className="card-text">We keep software, themes, and plugins up to date.</p>
                            <Link to="/portfolio" className="btn btn-primary">Know More...</Link>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="/images/content.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Content Creation and Management</h5>
                            <p className="card-text">We write or edit website content to ensure clarity and engagement.</p>
                            <Link to="/portfolio" className="btn btn-primary">Know More...</Link>
                        </div>
                    </div>
                    <div className="card" >
                        <img src="/images/consulting.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Consulting and Strategy</h5>
                            <p className="card-text">Offer advice on website strategy, including user experience and digital marketing.</p>
                            <Link to="/portfolio" className="btn btn-primary">Know More...</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Services
