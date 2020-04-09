import React from 'react';
import Headingtext from "../atoms/Headingtext";

const PageIntro = ({cardphoto,text}) => (
    <div className="row d-flex">
        <div className="col-lg-6 col-xl-6 mb-3">
            <img className="m-PageIntro_image-width" src={require(`../images/${cardphoto}`)} alt="Error Loading"/>
        </div>
        <div className="col-lg-6 col-xl-6 mb-5">
            <Headingtext text={text}/>
        </div>
    </div>
)

export default PageIntro;