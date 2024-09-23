import React, { useEffect, useState } from 'react'
import "../../assets/css/Home.css"
import { Link } from "react-router-dom"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Home = () => {
    const [scrollT, setScrollT] = useState(false)
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".banner_text_left", {
            // x: -600,
            delay: 0.3,
            duration: 0.7,
            opacity: 0,
            ease: "power4.in",
            stagger: 0.1


        })
        tl.from(".banner_text_right", {
            // x: 520,
            // delay: 1,
            opacity: 0,
            duration: 0.7,
            ease: "power4.in",

        })
        tl.from(".banner_text_right h4 span", {
            // x: 920,
            // y: -100,
            duration: 0.7,
            // delay: 0.2,
            opacity: 0,
            ease: "power4.in",
            // rotate: 500
        })
    })
    useEffect(() => {

        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);
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
                    <div className="carousel-item" id='secImg'>
                        <img src="/images/ab11.jpg" className="d-block w-100" alt="..." />
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
            <ScrollTrigger onEnter={() => setScrollT(true)} onExit={() => setScrollT(false)}>
                <div className='counterMain'>
                    <div className='CounterDiv'>
                        <h2>
                            {scrollT && <CountUp start={0} duration={2.75} delay={1.3} end={100} />}%</h2>
                        <p>Satisfied Customers</p>
                    </div> <div className='CounterDiv'>
                        <h2>
                            {scrollT && <CountUp start={0} duration={2.75} delay={1.3} end={98} />}%</h2>
                        <p>Successful Deployments</p>
                    </div> <div className='CounterDiv'>
                        <h2>
                            {scrollT && <CountUp start={0} duration={2.75} delay={1.3} end={15} />}</h2>
                        <p>Partnerships Established</p>
                    </div>
                    <div className='CounterDiv'>
                        <h2>
                            {scrollT && <CountUp start={0} duration={2.75} delay={1.3} end={60} />}</h2>
                        <p>Innovations Delivered</p>
                    </div>

                </div>
            </ScrollTrigger>
            <Link to="/services" className="exploreBTN-link-style">
                <button className="exploreBTN">Explore...</button>
            </Link>
        </div>
    )
}

export default Home
