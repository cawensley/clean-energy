import React from 'react';

const Buttonlink=({weblink,icon})=> {
    return (
        <a className="btn btn-outline-light a-Buttonlink_border mx-1"
        href={weblink}>
        <i className={icon}></i>
        </a>
    )
};

export default Buttonlink;