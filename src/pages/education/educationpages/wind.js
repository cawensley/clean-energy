import React from "react";
import {EducationPages} from "../RawEducationData";

function Wind() {
    return <h1>
        <div className="page-section portfolio bg-primary">
            <div className="container">

                <h2 className="page-section-heading text-center text-white">{EducationPages[1].Title}</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row d-flex">
                    <div className="col-lg-6 col-xl-6 mb-3">
                        <img className="imagzlarge" src={EducationPages[1].CardPhoto} alt="Error Loading"/>
                    </div>
                    <div className="col-lg-6 col-xl-6 mb-5 pagesdescription">
                        {EducationPages[1].Description}
                    </div>
                </div>

                <div className="portfolio text-white">
                    <p className="lead mb-5">Wind power or wind energy is the use of wind to provide the mechanical power
                    through wind turbines to turn electric generators and traditionally to do other work, like milling
                    or pumping. Wind power is a sustainable and renewable energy, and has a much smaller impact on the
                    environment compared to burning fossil fuels.</p>

                    <p className="lead mb-5">Wind farms consist of many individual wind turbines, which are connected to the electric power
                    transmission network. Onshore wind is an inexpensive source of electric power, competitive with
                    or in many places cheaper than coal or gas plants. Onshore wind farms also have an
                    impact on the landscape, as typically they need to be spread over more land than other power
                    stations and need to be built in wild and rural areas, which can lead to "industrialization
                    of the countryside" and habitat loss. Offshore wind is steadier and stronger than on land
                    and offshore farms have less visual impact, but construction and maintenance costs are considerably
                    higher. Small onshore wind farms can feed some energy into the grid or provide electric power
                    to isolated off-grid locations.</p>

                    <p className="lead mb-5">Wind is an intermittent energy source, which cannot make electricity nor be dispatched on demand.
                     It also gives variable power, which is consistent from year to year but varies greatly over
                    shorter time scales. Therefore, it must be used together with other electric power sources or
                    batteries to give a reliable supply. As the proportion of wind power in a region increases, more
                    conventional power sources are needed to back it up (such as fossil fuel power and nuclear power),
                    and the grid may need to be upgraded. Power-management techniques such as having dispatchable
                    power sources, enough hydroelectric power, excess capacity, geographically distributed turbines,
                    exporting and importing power to neighboring areas, energy storage, or reducing demand when wind
                    production is low, can in many cases overcome these problems. Weather forecasting permits
                    the electric-power network to be readied for the predictable variations in production that occur.</p>

                    <p className="lead mb-5"> In 2018, global wind power capacity grew 9.6% to 591 GW. In 2017, yearly wind energy production
                    grew 17%, reaching 4.4% of worldwide electric power usage, and providing 11.6% of the electricity
                    in the European Union. Denmark is the country with the highest penetration of wind power, with
                    43.4% of its consumed electricity from wind in 2017. At least 83 other countries are using
                    wind power to supply their electric power grids.</p>
                </div>

            </div>
        </div>
    </h1>
}

export default Wind;