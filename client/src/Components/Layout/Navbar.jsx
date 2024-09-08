import React from 'react'
import "../../assets/css/Header.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid MainContent">
                <Link className="navbar-brand BrandLogo" to="/">
                    <h4><i className="fa fa-mobile" aria-hidden="true"></i>
                        <sup><i className="fa fa-cog" aria-hidden="true"></i></sup>AP TECHNOLOGIES</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse MenuList" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 UlList">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav >
    )
}

export default Navbar
