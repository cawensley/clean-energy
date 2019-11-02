import React from "react";
import {EducationPages} from '../RawEducationData';

function Solar() {
    return <h1 className="bgTurbines txtshdw">
        <div className="page-section portfolio">
            <div className="container">

                <h2 className="page-section-heading text-center text-white">{EducationPages[0].Title}</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row d-flex">
                    <div className="col-lg-6 col-xl-6 mb-3">
                        <img className="imagzlarge" src={EducationPages[0].CardPhoto} alt="Error Loading"/>
                    </div>
                    <div className="col-lg-6 col-xl-6 mb-5 pagesdescription">
                        {EducationPages[0].Description}
                    </div>
                </div>
                <div className="portfolio text-white">
                    <p className="lead mb-5">Solar power is the conversion of energy from sunlight into electricity,
                        either directly using photovoltaics (PV), indirectly using concentrated solar power, or a combination.
                        Concentrated solar power systems use lenses or mirrors and tracking systems to focus a large area of
                        sunlight into a small beam. Photovoltaic cells convert light into an electric current using the photovoltaic
                        effect.</p>

                    <p className="lead mb-5">Photovoltaics were initially solely used as a source of electricity for small and medium-sized
                    applications, from the calculator powered by a single solar cell to remote homes powered by an
                    off-grid rooftop PV system. Commercial concentrated solar power plants were first developed in the
                    1980s. The 392 MW Ivanpah installation is the largest concentrating solar power plant in the world,
                    located in the Mojave Desert of California.</p>

                    <p className="lead mb-5">As the cost of solar electricity has fallen, the number of grid-connected solar PV systems has
                    grown into the millions and utility-scale photovoltaic power stations with hundreds of megawatts are
                    being built. Solar PV is rapidly becoming an inexpensive, low-carbon technology to harness renewable
                    energy from the Sun. The current largest photovoltaic power station in the world is the 850 MW
                    Longyangxia Dam Solar Park, in Qinghai, China.</p>

                    <p className="lead mb-5">The International Energy Agency projected in 2014 that under its "high renewables" scenario, by 2050,
                    solar photovoltaics and concentrated solar power would contribute about 16 and 11 percent, respectively,
                    of the worldwide electricity consumption, and solar would be the world's largest source of electricity.
                    Most solar installations would be in China and India. In 2017, solar power provided 1.7% of total
                    worldwide electricity production, growing at 35% per annum. As of 2018, the unsubsidised levelised
                    cost of electricity for utility scale solar power is around $43/MWh.</p>

                </div>

            </div>
        </div>
    </h1>
}

export default Solar;