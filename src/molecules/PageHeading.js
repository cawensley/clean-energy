import React from 'react';

const PageHeading=({title})=> {
    return (
        <div className="text-white text-center">

            <h1>{title}</h1>

            <div className="m-Pageheading_divider">
                <div className="m-Pageheading_divider_line bg-white"></div>
                <div className="m-Pageheading_divider_icon">
                    <i className="fas fa-bolt"></i>
                </div>
                <div className="m-Pageheading_divider_line bg-white"></div>
            </div>
        </div>
    )
};

export default PageHeading;