import React from 'react';
import ParaGraphtext from "../atoms/ParaGraphtext";

const AboutPerson = ({
                       image,
                       title,
                       text
}) => (
    <div className="row">
        <div className="col-6 mb-5 text-center">
            <img className="m-AboutPerson_facephoto-height" src={require(`../images/${image}`)} alt="Load Error!"/>
        </div>
        <div className="col-6 mb-5 text-left pl-3 pr-5">
            <p className="lead text-white text-uppercase font-weight-bold a-ParaGraph_background-transparent">{title}</p>
            <ParaGraphtext text={text}/>
        </div>
    </div>
)

export default AboutPerson;