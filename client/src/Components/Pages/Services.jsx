import React, { useEffect } from 'react'
import "../../assets/css/Services.css"
import { Link } from "react-router-dom"
const Services = () => {
    const service = [{ id: 1, image: "/images/design.jpg", title: "Website Design and Development", description: "We ensure websites are mobile-friendly and look good on all devices" },
    { id: 2, image: "/images/Shopping.jpg", title: "E-Commerce Solutions", description: "we provide a range of services ensures that your clients' online stores are well-designed, functional, and secure." },
    { id: 3, image: "/images/seo.jpg", title: "Search Engine Optimization", description: "We optimize website content, meta tags, and structure for search engines." },
    { id: 4, image: "/images/support.jpg", title: "Website Maintenance and Support", description: "We keep software, themes, and plugins up to date." },
    { id: 5, image: "/images/content.jpg", title: "Content Creation and Management", description: "We write or edit website content to ensure clarity and engagement." },
    { id: 6, image: "/images/consulting.jpg", title: "Consulting and Strategy", description: "Offer advice on website strategy, including user experience and digital marketing." },
    ]
    useEffect(() => {
        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="services" id="services">
            <div className="container mainC">
                <div className="w3-head-all ">
                    <h3>Services</h3>
                </div>

                <div className="w3-services-grids">
                    {service.map((serv, index) => (
                        <div key={index} className="card">
                            <img src={serv.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{serv.title}</h5>
                                <p className="card-text">{serv.description}</p>
                                <Link to={`/serviceDetail/${serv.id}`} className="btn btn-primary">Know More...</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
