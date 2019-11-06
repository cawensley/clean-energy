import React from "react";
import PageHeading from "../../molecules/PageHeading";
import ParaGraph from "../../atoms/ParaGraph";

function About() {
    return (
        <div className="page-section bgTurbines mb-0">

                <PageHeading title={"Who We Are"}/>

                <div className="row d-flex">
                    <div className="col-6 mb-5 text-center">
                        <img className="facephoto" src="https://raw.githubusercontent.com/cawensley/clean-energy/master/src/pages/about/kenface.jpg" alt="Load Error!"/>
                    </div>
                     <div className="col-6 mb-5 text-left pl-3 pr-5">
                        <p className="lead text-white text-uppercase font-weight-bold transparent">Ken Wilson – Engineer and Scientist</p>
                        <ParaGraph text={`Ken Wilson is a lifetime learner and holds master’s degrees in electrical engineering (1974 University of
                            Illinois) and biology (2014 University of Colorado). He spent 18 years at Bell Labs as a systems engineer
                            in telecommunications. From 1998 to 2008 he was an expert witness and consultant for
                            telecommunications companies. From 2009 to the present he has worked as a consultant and expert
                            witness in the energy industry, currently on the staff of Western Resource Advocates in Boulder
                            Colorado.`}/>
                    </div>
                 </div>

                 <div className="row d-flex">
                    <div className="col-6 mb-5 text-center">
                        <img className="facephoto" src="https://raw.githubusercontent.com/cawensley/clean-energy/master/src/pages/about/AlexWensleyCrop.jpg" alt="Load Error!"/>
                    </div>
                    <div className="col-6 mb-5 text-left pl-3 pr-5">
                        <p className="lead text-white text-uppercase font-weight-bold transparent">Alex Wensley – Webmaster and Engineer</p>
                        <ParaGraph text={`Alex Wensley is a Junior Web Developer and has a masters degree in Materials Science & Engineering (2005 Virginia Tech).
                            He spent 11 years solving material failures for both litigation and industrial clients, and is a registered professional engineer in N.C. From 2019 to the present he has studied
                            web development and networking engineering.`}/>
                    </div>
                 </div>
        </div>
    )
}

export default About;