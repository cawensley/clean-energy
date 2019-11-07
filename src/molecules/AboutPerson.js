import React from 'react';
import ParaGraph from "../atoms/ParaGraph";

const AboutPerson=({
                       image,
                       title,
                       text
})=> {
    return (
        <div className="row">
            <div className="col-6 mb-5 text-center">
                <img className="facephoto" src={image} alt="Load Error!"/>
            </div>
            <div className="col-6 mb-5 text-left pl-3 pr-5">
                <p className="lead text-white text-uppercase font-weight-bold transparent">{title}</p>
                <ParaGraph text={text}/>
            </div>
        </div>
    )
};

export default AboutPerson;