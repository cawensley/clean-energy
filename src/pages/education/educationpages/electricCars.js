import React from "react";
import {EducationPages} from "../RawEducationData";

function electricCars() {
    return <h1>
        <div className="page-section portfolio bg-primary">
            <div className="container">

                <h2 className="page-section-heading text-center text-white">{EducationPages[2].Title}</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row d-flex">
                    <div className="col-lg-6 col-xl-6 mb-3">
                        <img className="imagzlarge" src={EducationPages[2].CardPhoto} alt="Error Loading"/>
                    </div>
                    <div className="col-lg-6 col-xl-6 mb-5 pagesdescription">
                        {EducationPages[2].Description}
                    </div>
                </div>

                <div className="portfolio text-white">
                    <p className="lead mb-5">An electric car is an automobile that is propelled by one or more electric motors,
                    using energy stored in rechargeable batteries. The first practical electric cars were produced in the 1880s.
                     Electric cars were popular in the late 19th century and early 20th century, until advances in internal combustion
                    engines, electric starters in particular, and mass production of cheaper gasoline vehicles led to a decline in the
                    use of electric drive vehicles.</p>

                    <p className="lead mb-5">From 2008, a renaissance in electric vehicle manufacturing occurred due to advances in batteries,
                    illnesses and deaths due to air pollution, and the desire to reduce greenhouse gas emissions.
                    Several national and local governments have established government incentives for plug-in electric vehicles,
                    tax credits, subsidies, and other incentives to promote the introduction and adoption in the mass market of
                    new electric vehicles, often depending on battery size, their electric range and purchase price. The current
                    maximum tax credit allowed by the US Government is US$7,500 per car.[6] Compared with internal combustion
                    engine cars, electric cars are quieter, have no tailpipe emissions, and lower emissions in general. In
                    January 2019 and updated in April, a Reuters analysis of 29 global automakers concluded that automakers
                    are planning on spending $300 billion over next 5 to 10 years on electric cars, with 45% of that in China.</p>

                    <p className="lead mb-5">Charging an electric car can be done at a variety of charging stations, these charging stations can be
                    installed in both houses and public areas. The two all-time best selling electric cars, the Nissan
                    Leaf and the Tesla Model S, have EPA-rated ranges reaching up to 243 km (151 miles) and 600 km (370 miles)
                    respectively. The Leaf is the best-selling highway-capable electric car ever with more than
                    400,000 units sold, followed by the Tesla Model S with over 400,000 units sold worldwide by June 2019.</p>

                    <p className="lead mb-5">As of December 2018, there were about 5.3 million light-duty all-electric and plug-in hybrid
                    vehicles in use around the world. Despite the rapid growth experienced, the global stock of
                    plug-in electric cars represented just about 1 out of every 250 vehicles (0.40%) on the world's roads
                    by the end of 2018. The plug-in car market is shifting towards fully electric battery vehicles,
                    as the global ratio between annual sales of battery BEVs and PHEVs went from 56:44 in 2012, to 60:40
                    in 2015, and rose to 69:31 in 2018.</p>
                </div>

            </div>
        </div>
    </h1>
}

export default electricCars;