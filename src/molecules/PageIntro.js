import React from 'react';

const PageIntro=({image,text})=> {
    return (
            <div className="row d-flex">
                <div className="col-lg-6 col-xl-6 mb-3">
                    <img className="imagzlarge" src={image} alt="Error Loading"/>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5 text-white font-italic h2">
                    {text}
                </div>
            </div>
    )
};

export default PageIntro;