import React from 'react';

const Navbar=()=> {
	return (
		<nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
			<div className="container">
				<ul className="navbar-nav">
					<li className="nav-item text-uppercase">
						<a className="nav-link" href="#">Clean Energy Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">What you should know first</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">About Us</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Sponsors</a>
					</li>
				</ul>
			</div>
		</nav>
	)
};

export default Navbar;