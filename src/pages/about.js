import React from "react";

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

                    <div className="row portfolio text-white">
                        <div className="col-lg-4 ml-auto">
                            <p className="lead">Western Resource Advocates serves a unique role in our ability to link
                                local and regional action to protect our land, air, and water.</p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <p className="lead">Since 1989, Western Resource Advocates has worked to ensure that future
                                generations will have wildlands, clean air, and flowing rivers
                                in the iconic landscape of the West.</p>
                        </div>
                    </div>

                </div>
            </div>
    </h1>
}

export default About;