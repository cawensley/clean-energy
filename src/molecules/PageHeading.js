import React from 'react';

const PageHeading=({title})=> {
    return (
        <div>
            <h2 className="page-section-heading text-center text-white">
                {title}</h2>

            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-bolt"></i>
                </div>
                <div className="divider-custom-line"></div>
            </div>
        </div>
    )
};

export default PageHeading;