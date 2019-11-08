import React from "react";
import CardList from "../../molecules/CardList";
import {EducationPages} from '../../atoms/RawEducationData';
import PageHeading from "../../molecules/PageHeading";


function Education() {
    return (
        <div className="p-padding p-background_image mb-0 text-center">
            <div className="container">

                <PageHeading title={"Clean Energy Education"}/>

                <CardList EducationPages={EducationPages}/>

            </div>
        </div>
    )
}

export default Education;