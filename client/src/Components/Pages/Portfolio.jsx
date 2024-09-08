import React from 'react'
import "../../assets/css/Portfolio.css"
import { Link } from "react-router-dom"
const Portfolio = () => {
    return (
        <div className="gallery" id="portfolio">
            <div className="w3-head-all ">
                <h3>Portfolio</h3>
            </div>
            <div className="col-sm-6 col-xs-12 gallery-wthreegrids">
                <div className="gallery-agileinfo-row">
                    <div className="col-sm-6 col-xs-6 gallery-w3lsgrid">
                        <Link to="images/g1.jpg" className="agilefig gallery-img" data-lightbox="example-set" data-title="Duis venenatis nisl id posuere dictum. Maecenas vitae accumsan est, id imperdiet libero. Quisque sit amet felis a nisl condimentum bibendum phasellus vitae egestas diam."> </Link>
                    </div>
                    <div className="col-sm-6 col-xs-6 gallery-w3lsgrid gallery-text">
                        <h4>pc repair</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt ellus feugiat porttitor nulla magna vitae nisl </p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="gallery-agileinfo-row">
                    <div className="col-sm-6 col-xs-6 gallery-w3lsgrid gallery-w3lsgrid3">
                        <Link to="images/g3.jpg" className="agilefig gallery-img3" data-lightbox="example-set" data-title="Maecenas vitae accumsan est, id imperdiet libero. Duis venenatis nisl id posuere dictum.  Quisque sit amet felis a nisl condimentum bibendum phasellus vitae egestas diam."> </Link>
                    </div>
                    <div className="col-sm-6 col-xs-6 gallery-w3lsgrid gallery-text3">
                        <h4>mobile repair</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt ellus feugiat porttitor nulla magna vitae nisl </p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="col-sm-6 col-xs-12 gallery-wthreegrids">
                <div className="gallery-agileinfo-row">
                    <div className="col-sm-6 col-xs-6 gallery-w3lsgrid">
                        <Link to="images/g2.jpg" className="agilefig gallery-img2" data-lightbox="example-set" data-title="Duis venenatis nisl id posuere dictum.  Maecenas vitae accumsan est, id imperdiet libero. Quisque sit amet felis a nisl condimentum bibendum phasellus vitae egestas diam."> </Link>
                    </div>
                    <div className="col-sm-6 col-xs-6 gallery-w3lsgrid gallery-text">
                        <h4>Software problems</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt ellus feugiat porttitor nulla magna vitae nisl </p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="gallery-agileinfo-row">
                    <div className="col-sm-6 col-xs-6 gallery-w3lsgrid gallery-w3lsgrid3">
                        <Link to="images/g4.jpg" className="agilefig gallery-img4" data-lightbox="example-set" data-title="Nisl id posuere dictum duis venenatis. Maecenas vitae accumsan est, id imperdiet libero. Quisque sit amet felis a nisl condimentum bibendum phasellus vitae egestas diam."> </Link>
                    </div>
                    <div className="col-sm-6 col-xs-6 gallery-w3lsgrid gallery-text3">
                        <h4>board problems</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt ellus feugiat porttitor nulla magna vitae nisl </p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>

            <div className="clearfix"> </div>

            <script src="js/lightbox-plus-jquery.min.js"></script>
        </div>
    )
}

export default Portfolio
