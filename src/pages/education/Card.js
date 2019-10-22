import React from 'react';
import "./Card.css";

const Card=({CardPhoto,Title,Description,Weblink})=> {
    return (
        <div className="card d-inline-flex align-content-start d-wrap">
            <img className="imagz card-img-top" src={CardPhoto} alt="Error Loading"/>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text lead">{Description}</p>
                    <a href={Weblink} className="btn btn-primary">Learn More!</a>
                </div>
        </div>
    )
};

export default Card;