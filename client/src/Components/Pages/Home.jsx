import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
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
                            {scrollT && <CountUp start={0} duration={2.75} delay={0.5} end={100} />}%</h2>
                        <p>Satisfied Customers</p>
                    </div> <div className='CounterDiv'>
                        <h2>
                            {scrollT && <CountUp start={0} duration={2.75} delay={0.5} end={98} />}%</h2>
                        <p>Successful Deployments</p>
                    </div> <div className='CounterDiv'>
                        <h2>
                            {scrollT && <CountUp start={0} duration={2.75} delay={0.5} end={15} />}</h2>
                        <p>Partnerships Established</p>
                    </div>
                    <div className='CounterDiv'>
                        <h2>
                            {scrollT && <CountUp start={0} duration={2.75} delay={0.5} end={60} />}</h2>
                        <p>Innovations Delivered</p>
                    </div>

                </div>
            </ScrollTrigger>
            <div className='ReviewsMainDiv'>
                <h2>Our Customers Love What We Do</h2>
                <p id='para'>Our customers love our products! Read their reviews to discover why they're raving about our quality, service, and overall experience. Join the satisfied ranks today!</p>
                <div className='ReviewCardsDiv'>
                    <div className='ratingCard'>
                        <div className='ratingRow'>
                            <div className='stars'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4.8}
                                    isHalf={true}
                                    edit={false}
                                    activeColor="#ffd700"
                                    style={{ display: 'inline-block' }}
                                />(4.8)
                            </div>
                            <i class="ri-double-quotes-l"></i>
                        </div>
                        <div className='ratingPara'>
                            Working with AP Technologies on our website development has been a fantastic experience. The professionalism, attention to detail, and seamless communication throughout the project exceeded our expectations. The final product is modern, responsive, and perfectly tailored to our needs. Highly recommend!
                        </div>
                        <div className='ratingNameMain'>
                            <div className='ratingNameImg'>
                                <img src='https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            </div>
                            <p>Vikram Singh </p>
                        </div>
                    </div>
                    <div className='ratingCard length'>
                        <div className='ratingRow'>
                            <div className='stars'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                    style={{ display: 'inline-block' }}
                                />(4.0)
                            </div>
                            <i class="ri-double-quotes-l"></i>
                        </div>
                        <div className='ratingPara'>
                            AP Technologies truly transformed our online presence. Their team was responsive, innovative, and efficient, delivering a website that exceeded our expectations. Our visitors have commented on the sleek design and user-friendly experience!
                        </div>
                        <div className='ratingNameMain'>
                            <div className='ratingNameImg'>
                                <img src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            </div>
                            <p>Arjun Sharma</p>
                        </div>
                    </div>
                    <div className='ratingCard'>
                        <div className='ratingRow'>
                            <div className='stars'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4.2}
                                    isHalf={true}
                                    edit={false}
                                    activeColor="#ffd700"
                                    style={{ display: 'inline-block' }}
                                />(4.2)
                            </div>
                            <i class="ri-double-quotes-l"></i>
                        </div>
                        <div className='ratingPara'>
                            We couldn’t be more pleased with the website that AP Technologies built for us. Their attention to detail, timely delivery, and seamless integration of features have helped boost our customer engagement significantly!
                        </div>
                        <div className='ratingNameMain'>
                            <div className='ratingNameImg'>
                                <img src='https://images.pexels.com/photos/7581116/pexels-photo-7581116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            </div>
                            <p>Ravi Patel</p>
                        </div>
                    </div>
                    <div className='ratingCard thirdRow'>
                        <div className='ratingRow'>
                            <div className='stars'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={3.9}
                                    edit={false}
                                    isHalf={true}
                                    activeColor="#ffd700"
                                    style={{ display: 'inline-block' }}
                                />(3.9)
                            </div>
                            <i class="ri-double-quotes-l"></i>
                        </div>
                        <div className='ratingPara'>
                            Working with AP Technologies was a fantastic experience. They understood our business needs perfectly and delivered a website that not only looks great but functions flawlessly. Their ongoing support has been a game changer for our growth.
                        </div>
                        <div className='ratingNameMain'>
                            <div className='ratingNameImg'>
                                <img src='https://media.istockphoto.com/id/2101216413/photo/portrait-of-young-businesswoman-with-curly-hairstyle-wear-trendy-smart-casual-outfit-isolated.jpg?s=1024x1024&w=is&k=20&c=thuOCCPPZuprUTVrF1uvr3QHPrXWmIuqhzlUzRnGErs=' />
                            </div>
                            <p>Priya Desai</p>
                        </div>
                    </div>
                    <div className='ratingCard length thirdRow'>
                        <div className='ratingRow'>
                            <div className='stars'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4.3}
                                    isHalf={true}
                                    edit={false}
                                    activeColor="#ffd700"
                                    style={{ display: 'inline-block' }}
                                />(4.3)
                            </div>
                            <i class="ri-double-quotes-l"></i>
                        </div>
                        <div className='ratingPara'>
                            AP Technologies developed an amazing website for us. Their professionalism and expertise were evident at every stage, from design to launch. We’ve seen a huge improvement in our site's traffic and user interaction.
                        </div>
                        <div className='ratingNameMain'>
                            <div className='ratingNameImg'>
                                <img src='https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.jpg?s=1024x1024&w=is&k=20&c=PhlH8J6fq8OjC67fvza6GLCqot3VCsm-YbOv14_CAfc=' />
                            </div>
                            <p>Karan Mehta</p>
                        </div>
                    </div>
                    <div className='ratingCard thirdRow'>
                        <div className='ratingRow'>
                            <div className='stars'>
                                <ReactStars
                                    count={5}
                                    isHalf={true}
                                    size={24}
                                    value={4.5}
                                    edit={false}
                                    activeColor="#ffd700"
                                    style={{ display: 'inline-block' }}
                                />(4.5)
                            </div>
                            <i class="ri-double-quotes-l"></i>
                        </div>
                        <div className='ratingPara'>
                            AP Technologies provided outstanding service throughout the entire development process. The end result was a beautifully designed, high-performing website that’s been critical in expanding our business reach.
                        </div>
                        <div className='ratingNameMain'>
                            <div className='ratingNameImg'>
                                <img src='https://images.pexels.com/photos/4307692/pexels-photo-4307692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            </div>
                            <p>Ananya Iyer</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/services" className="exploreBTN-link-style">
                <button className="exploreBTN">Explore...</button>
            </Link>
        </div>
    )
}

export default Home
