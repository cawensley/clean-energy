import React from 'react';
import WeatherTable from "../../organisms/WeatherTable";
import PageHeading from "../../molecules/PageHeading";
import ParaGraph from "../../atoms/ParaGraph";

function Home() {
    return (
        <div className="mb-0 page-section bgTurbines">

                <PageHeading title={"Clean Energy Home Page"}/>

                <WeatherTable/>

                <div className="container">
                    <ParaGraph text={`Electricity, after food, water and shelter, is probably the most important aspect of modern human life.
                        Reliable electricity is a necessity in our lives, at home, at work, and for recreation. We don’t often
                        appreciate how dependent we are on electricity until there is a power outage.`}/>
                    <ParaGraph text={`The production and use of electricity is going through a transformation, from old coal plants that pollute
                    the environment, to giant wind turbines and shining solar farms. The gasoline automobile is being
                        slowly replaced by electric vehicles, and everyone has a smart phone that needs daily charging.`}/>
                    <ParaGraph text={`This website is dedicated to educating the average person on how electricity is generated and delivered
                    to our homes, businesses and industries. The pages will start with the basics and build to the expert
                    level. You can go as deeply as you want. We hope you enjoy the trip.`}/>
                </div>
        </div>
    )
}

export default Home;