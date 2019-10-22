import {Link} from "react-router-dom";
import React from "react";

const MainNavBar=()=> {
    return (
        <nav className="navbar navbar-expand bg-secondary fixed-top text-uppercase" id="mainNav">
            <div className="container">
                <Link to="/" className="navbar-brand nav-link py-3 px-3 rounded">Home</Link>
                <div>
                    <ul className="navbar-nav navbar-expand ml-auto">
                        <li className="nav-item mx-1">
                            <Link to="/education" className="nav-link py-3 px-3 rounded">Education</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to="/about" className="nav-link py-3 px-3 rounded">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default MainNavBar;