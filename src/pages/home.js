import React from 'react';
import WeatherTable from "../components/WeatherTable";

function Home() {
    return <h1>
            <div className="masthead bg-primary text-white text-center portfolio">
                <div className="row text-white">
                    <div className="col-lg-6">
                        <img className="mb-2" src="https://ensia.com/wp-content/uploads/2016/11/article_wind_and_solar_main-760x378.jpg" alt="Error Loading"/>
                    </div>
                    <div className="col-lg-6">
                        <WeatherTable/>
                    </div>
                </div>
                <div className="container d-flex align-items-center flex-column">

                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>

                    <p className="masthead-subheading font-weight-light mb-0">Electricity, after food, water and shelter, is probably the most important aspect of modern human life.
                        Reliable electricity is a necessity in our lives, at home, at work, and for recreation. We don’t often
                        appreciate how dependent we are on electricity until there is a power outage.</p>
                    <p></p>
                    <p className="masthead-subheading font-weight-light mb-0">The production and use of electricity is going through a transformation, from old coal plants that pollute
                    the environment, to giant wind turbines and shining solar farms. The gasoline automobile is being
                        slowly replaced by electric vehicles, and everyone has a smart phone that needs daily charging.</p>
                    <p></p>
                    <p className="masthead-subheading font-weight-light mb-0">This website is dedicated to educating the average person on how electricity is generated and delivered
                    to our homes, businesses and industries. The pages will start with the basics and build to the expert
                    level. You can go as deeply as you want. We hope you enjoy the trip.</p>

                </div>
            </div>
            </h1>
}

export default Home;