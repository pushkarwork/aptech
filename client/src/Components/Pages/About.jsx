import React from 'react'
import { Link } from "react-router-dom"
import "../../assets/css/About.css"
const About = () => {
    return (
        <div className="about" id="about">
            <div className="container mainC">
                <div className="w3-head-all text-center HeadingAbout">
                    <h3>About</h3>
                </div>

                <div className="about-bottom-grid1">
                    <div className="col-md-6 bottomgridtext">
                        <h3>Transforming Ideas into Digital Masterpieces </h3>
                        <p>Emphasizes creativity and the unique value of turning concepts into fully developed websites.</p>
                        <div className="readmore-w3">
                            <Link className="readmore" id='button' to="#" data-toggle="modal" data-target="#myModal">Read More<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-6 bottomgridimg">
                        <img src="images/ab11.jpg" alt="" />
                    </div>

                </div>
                <div className="about-bottom-grid2">
                    <div className="col-md-6 bottomgridimg">
                        <img src="images/ab22.jpg" alt="" />
                    </div>
                    <div className="col-md-6 bottomgridtext bottomleft">
                        <h3>Building Websites That Drive Success </h3>
                        <p>Highlights the impact of your service, focusing on visually appealing websites that achieve business goals.</p>
                        <div className="readmore-w3">
                            <Link id='button' className="readmore" to="#" data-toggle="modal" data-target="#myModal">Read More<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default About
