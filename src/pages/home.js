import React from 'react';

function Home() {
    return <h1>
            <div className="masthead portfolio bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                        <img class="masthead-avatar mb-5" src="https://ensia.com/wp-content/uploads/2016/11/article_wind_and_solar_main-760x378.jpg" alt=""/>
                        <h2 className="masthead-heading text-uppercase mb-0">Start Saving the World!</h2>

                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>

                        <p className="masthead-subheading font-weight-light mb-0">One Joule at a time</p>

                </div>
            </div>
            </h1>
}

export default Home;