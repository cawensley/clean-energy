import React from 'react';
import {Link} from "react-router-dom";

const Card=({CardPhoto,Title,Description,Weblink})=> {
    return (
        <div className="card d-inline-flex align-content-start d-wrap m-1">
            <img className="imagz card-img-top" src={CardPhoto} alt="Error Loading"/>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text lead">{Description}</p>
                    <Link to={Weblink} className="btn btn-primary">Learn More!</Link>
                </div>
        </div>
    )
};

export default Card;