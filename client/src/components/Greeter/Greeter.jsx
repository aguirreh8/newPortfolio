import React from "react";
import "./Greeter.css";
import html from "../../images/html5.png";
import css from "../../images/css3.png";
import js from "../../images/javascript.png";
import mysql from "../../images/mysql.png";
import jquery from "../../images/jquery.png";
import mongo from "../../images/mongodb.png"
import express from "../../images/expressjs.png"
import react from "../../images/react.png";
import nodejs from "../../images/nodejs.png";

const Greeter = () => (
	<div className="container">
		<div className="greeter">
			<div className="name-text">
				Henry Aguirre
			</div>
			<div className="title-text">
				Full Stack Web Developer
			</div>
			<div className="skill-holder">
				<img src={html} className="skill-icon" title="HTML" alt="html"/>
				<img src={css} className="skill-icon" title="CSS" alt="css"/>
				<img src={js} className="skill-icon" title="Javascript" alt="js"/>
				<img src={mysql} className="skill-icon" title="MySQL" alt="mysql"/>
				<img src={jquery} className="skill-icon" title="jQuery" alt="jquery"/>
				<img src={mongo} className="skill-icon" title="MongoDB" alt="mongoDB"/>
				<img src={express} className="skill-icon" title="express.JS" alt="express.js"/>
				<img src={react} className="skill-icon" title="React" alt="react"/>
				<img src={nodejs} className="skill-icon" title="node.JS" alt="node.js"/>
			</div>
		</div>
	</div>
);

export default Greeter;

