import React from "react";
import CardList from "./CardList";
import {EducationPages} from './RawEducationData';


function Education() {
    return <h1 className="mb-0">
        <div className="page-section bgTurbines">
            <div className="container">

                <h2 className="page-section-heading text-center text-white txtshdw">Clean Energy
                    Education</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                    <CardList EducationPages={EducationPages}/>

            </div>
        </div>
    </h1>
}

export default Education;

