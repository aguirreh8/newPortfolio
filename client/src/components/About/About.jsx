import React from "react";
import "./About.css";
import myPic from "../../images/me.png";

const About = () => (
	<div className="component-holder about">
		<div className="container">
			<h4 className="title">About</h4>
			<div className="row">
				<div className="col">
					<img className="profile-picture" src={myPic} alt="Henry Aguirre" title="Henry Aguirre"/>
				</div>				
				<div className="col">
					<p className="about-text">A Full Stack Web Developer who is able to take a project from conception to deployment. Always eager to learn new
					technologies and advancements in the tech scene, latest pursuit being Web Development using React, Node.js, and MongoDB. Knows how to multitask and 
					prioritize tasks, having worked as a general clerk in the past. Graduated with a Computer Science degree in 2013, having worked 
					in projects using Java, C# and T-SQL. </p>
				</div>	
			</div>			
		</div>
	</div>
);

export default About;