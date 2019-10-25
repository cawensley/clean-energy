import React from 'react';
import WeatherTable from "./WeatherTable";

function Home() {
    return <h1>
            <div className="page-section bg-primary text-white portfolio">
                <h2 className="page-section-heading text-center text-white">
                    Clean Energy Home Page</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <WeatherTable/>

                <div className="container d-flex justify-content-center flex-column masthead">
                    <p className="masthead-subheading font-weight-light mb-4">Electricity, after food, water and shelter, is probably the most important aspect of modern human life.
                        Reliable electricity is a necessity in our lives, at home, at work, and for recreation. We don’t often
                        appreciate how dependent we are on electricity until there is a power outage.</p>
                    <p className="masthead-subheading font-weight-light mb-4">The production and use of electricity is going through a transformation, from old coal plants that pollute
                    the environment, to giant wind turbines and shining solar farms. The gasoline automobile is being
                        slowly replaced by electric vehicles, and everyone has a smart phone that needs daily charging.</p>
                    <p className="masthead-subheading font-weight-light mb-0">This website is dedicated to educating the average person on how electricity is generated and delivered
                    to our homes, businesses and industries. The pages will start with the basics and build to the expert
                    level. You can go as deeply as you want. We hope you enjoy the trip.</p>

                </div>
            </div>
            </h1>
}

export default Home;


/*<div className="row d-flex">
    <div className="col-lg-6 col-xl-6 mb-3 pr-5 pl-5">
        <img className="w-100 border border-dark" src="https://ensia.com/wp-content/uploads/2016/11/article_wind_and_solar_main-760x378.jpg" alt="Error Loading"/>
    </div>
    <div className="col-lg-6 col-xl-6 mb-3">
        <WeatherTable/>
    </div>
</div>*/