import React from "react";
import "./about.css"

function About() {
    return <h1>
        <div className="page-section portfolio bg-primary">
            <div className="container">

                <h2 className="page-section-heading text-center text-white text-uppercase">Who We Are</h2>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row portfolio text-white container d-flex">
                        <div className="col-lg-6">
                            <img className="mb-5" src="https://github.com/cawensley/clean-energy/blob/master/src/pages/images/kenface.jpg?raw=true" alt="Load Error!"/>
                        </div>
                        <div className="col-lg-6">
                            <p className="lead text-uppercase font-weight-bold">Ken Wilson – Engineer and Scientist</p>
                            <p className="lead">Ken Wilson is a lifetime learner and holds master’s degrees in electrical engineering (1974 University of
                                Illinois) and biology (2014 University of Colorado). He spent 18 years at Bell Labs as a systems engineer
                                in telecommunications. From 1998 to 2008 he was an expert witness and consultant for
                                telecommunications companies. From 2009 to the present he has worked as a consultant and expert
                                witness in the energy industry, currently on the staff of Western Resource Advocates in Boulder
                                Colorado.</p>
                            <br />
                        </div>
                        <div className="col-lg-6">
                            <img className="mb-5" src="https://github.com/cawensley/clean-energy/blob/master/src/pages/images/AlexWensleyCrop.jpg?raw=true" alt="Load Error!"/>
                        </div>
                        <div className="col-lg-6">
                            <p className="lead text-uppercase font-weight-bold">Alex Wensley – Webmaster and Engineer</p>
                            <p className="lead">Alex Wensley is a Junior Web Developer and has a masters degree in Materials Science & Engineering (2005 Virginia Tech).
                                He spent 11 years solving material failures for both litigation and industrial clients, and is a registered professional engineer in N.C. From 2019 to the present he has studied
                                web development and networking engineering.</p>
                        </div>
                    </div>

                </div>
            </div>
    </h1>
}

export default About;