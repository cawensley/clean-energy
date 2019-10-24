import React from "react";
import "./about.css"

function About() {
    return <h1>
        <div className="page-section bg-primary text-white portfolio">

            <h2 className="page-section-heading text-center">Who We Are</h2>

            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-bolt"></i>
                </div>
                <div className="divider-custom-line"></div>
            </div>

             <div className="row d-flex">
                <div className="col-6 mb-5 text-right">
                    <img className="facephoto" src="https://github.com/cawensley/clean-energy/blob/master/src/pages/about/kenface.jpg?raw=true" alt="Load Error!"/>
                </div>
                 <div className="col-6 mb-5 text-left pl-3 pr-5">
                    <p className="lead text-uppercase font-weight-bold">Ken Wilson – Engineer and Scientist</p>
                    <p className="lead">Ken Wilson is a lifetime learner and holds master’s degrees in electrical engineering (1974 University of
                        Illinois) and biology (2014 University of Colorado). He spent 18 years at Bell Labs as a systems engineer
                        in telecommunications. From 1998 to 2008 he was an expert witness and consultant for
                        telecommunications companies. From 2009 to the present he has worked as a consultant and expert
                        witness in the energy industry, currently on the staff of Western Resource Advocates in Boulder
                        Colorado.</p>
                </div>
             </div>

             <div className="row d-flex">
                <div className="col-6 mb-5 text-right">
                    <img className="facephoto" src="https://github.com/cawensley/clean-energy/blob/master/src/pages/about/AlexWensleyCrop.jpg?raw=true" alt="Load Error!"/>
                </div>
                <div className="col-6 mb-5 text-left pl-3 pr-5">
                    <p className="lead text-uppercase font-weight-bold">Alex Wensley – Webmaster and Engineer</p>
                    <p className="lead">Alex Wensley is a Junior Web Developer and has a masters degree in Materials Science & Engineering (2005 Virginia Tech).
                        He spent 11 years solving material failures for both litigation and industrial clients, and is a registered professional engineer in N.C. From 2019 to the present he has studied
                        web development and networking engineering.</p>
                </div>
             </div>

        </div>
    </h1>
}

export default About;