import React from 'react';
import "./Card.css";

const Card=({CardPhoto,Title,Description,Weblink})=> {
    return (
        <div className="card">
            <img className="card-img-top" src={CardPhoto} alt="Error Loading"/>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Description}</p>
                    <a href={Weblink} className="btn btn-primary">Go There!</a>
                </div>
        </div>
    )
};

export default Card;