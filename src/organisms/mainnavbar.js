import {Link} from "react-router-dom";
import React from "react";

const MainNavBar=()=> {
    return (
        <nav className="bg-secondary navbar navbar-expand fixed-top o-mainnavbar_fonts o-mainnavbar_padding">
            <div className="container">
                    <Link to="/" className="navbar-brand py-3 px-3 rounded text-uppercase">Home</Link>
                <div className="ml-auto">
                    <Link to="/education" className="navbar-brand py-3 px-3 rounded">Education</Link>
                    <Link to="/about" className="navbar-brand py-3 px-3 rounded">About</Link>
                </div>
            </div>
        </nav>
    )
};

export default MainNavBar;