import {Link} from "react-router-dom";
import React from "react";

const MainNavBar=()=> {
    return (
        <nav className="navbar navbar-expand bg-secondary fixed-top">
                <ul className="navbar-nav">
                    <li className="nav-item mx-1">
                        <Link to="/" className="nav-link py-3 px-3 rounded text-light">Home</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/education" className="nav-link py-3 px-3 rounded text-light">Education</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/about" className="nav-link py-3 px-3 rounded text-light">About</Link>
                    </li>
                </ul>
        </nav>
)
};

export default MainNavBar;