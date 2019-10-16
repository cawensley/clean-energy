import {Link} from "react-router-dom";
import React from "react";

const MainNavBar=()=> {
    return (
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded">Home</Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/education" className="nav-link py-3 px-0 px-lg-3 rounded">Education</Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/about" className="nav-link py-3 px-0 px-lg-3 rounded">About</Link>
                </li>
            </ul>
        </nav>
    )
};

export default MainNavBar;