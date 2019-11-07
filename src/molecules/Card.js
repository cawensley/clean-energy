import React from 'react';
import {Link} from "react-router-dom";

const Card=({
            cardphoto,
            title,
            description,
            weblink
})=> {
    return (
        <div className="card d-inline-flex align-content-start d-wrap m-1">
            <img className="imagz card-img-top" src={cardphoto} alt="Error Loading"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text lead">{description}</p>
                    <Link to={weblink} className="btn btn-primary">Learn More!</Link>
                </div>
        </div>
    )
};

export default Card;