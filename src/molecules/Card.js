import React from 'react';
import {Link} from "react-router-dom";

const Card = ({
            cardphoto,
            title,
            description,
            weblink
}) => (
    <div className="card m-card-width d-inline-flex m-1">
        <img className="card-img-top" src={require(`../images/${cardphoto}`)} alt="Error Loading" height={200}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text lead">{description}</p>
                <Link to={weblink} className="btn btn-primary">Learn More!</Link>
            </div>
    </div>
)

export default Card;