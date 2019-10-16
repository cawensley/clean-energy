import React from "react";
import CardList from "../components/CardList";
import {EducationPages} from '../components/RawEducationData';


function Education() {
    return <h1>
        <div className="page-section portfolio bg-primary">
            <div className="container">

                <h2 className="page-section-heading text-center text-white text-uppercase">Clean Energy
                    Education</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <CardList EducationPages={EducationPages}/>

            </div>
        </div>
    </h1>
}

export default Education;

