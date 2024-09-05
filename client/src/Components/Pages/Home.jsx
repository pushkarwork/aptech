import React from 'react'
import "../../assets/css/Home.css"
const Home = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active ImgBox">
                        <img src="/images/b11.jpg" className="d-block w-100" alt="..." />
                        <div className="textBox text-center">
                            <div className="col-md-8 banner_text_left">
                                <h3>Need a Website?</h3>
                                <p>Unleash the full potential of your online presence with a website that captivates and
                                    converts.</p>
                            </div>
                            <div className="col-md-4 banner_text_right">
                                <h4>Elevate Your <span>Online</span> Presence</h4>
                                <div className="w3-ban-text">
                                    <h5>with Our Expertise</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/22.jpg" className="d-block w-100" alt="..." />
                        <div className="textBox text-center">
                            <div className="col-md-8 banner_text_left" id="secondImgBox">
                                <h3>Transform Your Vision into Reality</h3>
                                <p>Crafting digital experiences that engage and inspire.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home
