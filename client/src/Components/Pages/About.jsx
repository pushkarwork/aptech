import React from 'react'
import {Link} from "react-router-dom"
const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="w3-head-all text-center ">
                    <h3>About</h3>
                </div>

                <div className="about-bottom-grid1">
                    <div className="col-md-6 bottomgridtext">
                        <h3>Lorem ipsum dolor sit </h3>
                        <p>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem , eaque ipsa quae ab illo inventore </p>
                        <div className="readmore-w3">
                            <Link className="readmore" to="#" data-toggle="modal" data-target="#myModal">Read More<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-6 bottomgridimg">
                        <img src="images/ab11.jpg" alt=""/>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="about-bottom-grid2">
                    <div className="col-md-6 bottomgridimg">
                        <img src="images/ab22.jpg" alt=""/>
                    </div>
                    <div className="col-md-6 bottomgridtext bottomleft">
                        <h3>Lorem ipsum dolor sit </h3>
                        <p>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem , eaque ipsa quae ab illo inventore </p>
                        <div className="readmore-w3">
                            <Link className="readmore" to="#" data-toggle="modal" data-target="#myModal">Read More<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default About
