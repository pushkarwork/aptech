import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Home = () => {
    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of slides (images and their related content)
    const slides = [
        {
            id: 'callbacks1_s1',
            image: '/images/b11.jpg',
            title: 'Need a service?',
            description: 'Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.',
            dateTexts: ['23-05-2017', '01-07-2017', '15-08-2017'],
        },
        {
            id: 'callbacks1_s2',
            image: '/images/22.jpg',
            title: 'Want Fast services?',
            description: 'Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.',
            dateTexts: ['23-05-2017', '01-07-2017', '15-08-2017'],
        },
    ];

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div>
            <div className="callbacks_container w3-layouts">
                <ul className="rslides callbacks callbacks1 agileits" id="slider4">
                    {slides.map((slide, index) => (
                        <li
                            key={slide.id}
                            className={currentSlide === index ? 'callbacks1_on' : ''}
                            style={{
                                float: currentSlide === index ? 'left' : 'none',
                                position: currentSlide === index ? 'relative' : 'absolute',
                                opacity: currentSlide === index ? '1' : '0',
                                zIndex: currentSlide === index ? '2' : '1',
                                display: 'list-item',
                                transition: 'opacity 500ms ease-in-out',
                            }}
                        >
                            <img src={slide.image} alt="home here" />
                            <div className="caption text-center">
                                <div className="col-md-8 banner_text_left">
                                    <h3>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </div>
                                <div className="col-md-4 banner_text_right">
                                    <h4>Right choice to service</h4>
                                    {slide.dateTexts.map((dateText, i) => (
                                        <div className="w3-ban-text" key={i}>
                                            <h5>Penatibus et magnis lorem</h5>
                                            <p>{dateText}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link to="#" className="callbacks_nav callbacks1_nav prev" onClick={prevSlide}>
                    Previous
                </Link>
                <Link to="#" className="callbacks_nav callbacks1_nav next" onClick={nextSlide}>
                    Next
                </Link>
            </div>
        </div>
    );
};

export default Home;
