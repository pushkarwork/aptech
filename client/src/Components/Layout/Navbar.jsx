import React from 'react';
import '../../assets/css/Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Function to handle navbar collapse after clicking a link
    const handleNavLinkClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        // Check if the navbar is expanded, if so, click the toggler to collapse
        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid MainContent">
                <Link className="navbar-brand BrandLogo" to="/">
                    <h4>
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        <sup>
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </sup>
                        AP TECHNOLOGIES
                    </h4>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse MenuList" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 UlList">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" onClick={handleNavLinkClick}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about" onClick={handleNavLinkClick}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/services" onClick={handleNavLinkClick}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/contact" onClick={handleNavLinkClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
