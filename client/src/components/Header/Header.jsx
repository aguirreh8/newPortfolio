import React from "react";
import "./Header.css";

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{paddingRight: "80px", paddingLeft: "80px"}}>		
	  		<span className="navbar-brand mb-0 h1">Henry Aguirre</span>
	  		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
	    		<span className="navbar-toggler-icon"></span>
	  		</button>

	 		<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
	  			<ul className="navbar-nav" >
	  				<li className="nav-item">
	  					<a className="nav-link font-weight-bold" id="top" href="">Top</a>
	  				</li>
	  				<li className="nav-item">
	  					<a className="nav-link font-weight-bold" id="about" href="">About</a>
	  				</li>
	  				<li className="nav-item">
	  					<a className="nav-link font-weight-bold" id="projects" href="">Projects</a>
	  				</li>
	  				<li className="nav-item">
	  					<a className="nav-link font-weight-bold" id="contact" href="">Contact</a>
	  				</li>
	  			</ul>
  			</div>	  	
	</nav>
)

export default Header;