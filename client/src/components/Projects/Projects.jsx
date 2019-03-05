import React from "react";
import "./Projects.css";
import Webventeer from "../../images/webventeer.jpg";
import WeatherStyle from "../../images/weatherstyle.jpg";
import JobCards from "../../images/jobcards.jpg";
import BurgerEater from "../../images/burgereater.jpg";
import MemoryGame from "../../images/memorygame.jpg";
import Hangman from "../../images/hangman.jpg";
import What2Wear from "../../images/what2wear.jpg";

const Projects = () => (
	<div className="component-holder projects">
		<div className="container">
			<h4 className="title">Projects</h4>
			<div className="gallery js-flickity">

				<div className="gallery-cell">
			  	<img src={JobCards} className="project-img" alt="jobcards"/>
			  	<p className="project-text">
			  		<span className="project-title" alt="webventeer">JobCards</span>
			  		<br />
			  		Scrapes through job postings websites to create a single searching hub for the users. Allows users to create an account 
			  		to save jobs for later viewing, as well allow them to take and notes for specified job posting. Uses MySQL server for user authentication,
			  		job saving, and note taking through relational tables. Uses cheerio and request through express.js to scrape through sites 
			  		Project created in React and deployed on glitch.com.
					<br />
					<br />
					<span>
						<a 
							href="https://jobcards.glitch.me/" 
							target="_blank" 
							className="btn btn-success project-link" 
							rel="noopener noreferrer">
								Go To Site
						</a>
					</span>
					<span>
						<a 
							href="https://github.com/estivensal7/JobCards" 
							target="_blank" 
							className="btn btn-danger project-link" 
							rel="noopener noreferrer">
								Go to Repo
						</a>
					</span>
				</p>
			  </div>

			  <div className="gallery-cell">
			  	<img src={WeatherStyle} className="project-img" alt="weatherstyle"/>
			  	<p className="project-text">
			  		<span className="project-title" alt="webventeer">WeatherStyle</span>
			  		<br />
			  		An application to help out the user pick what to wear based on the current weather, and also shows shopping
			  		recommendations from Ebay.com. Uses handlebars.js to display different components based on address. 
			  		Uses weather node package to gather weather info based on provided zip code and Ebay API to bring links to items
			  		into a component. Deployed on Heroku free account (may be slow to start).
					<br />
					<br />
					<span>
						<a 
							href="https://weather-style.herokuapp.com/" 
							target="_blank" 
							className="btn btn-success project-link" 
							rel="noopener noreferrer">
								Go To Site
						</a>
					</span>
					<span>
						<a 
							href="https://github.com/octaviahub/weatherstyle" 
							target="_blank" 
							className="btn btn-danger project-link" 
							rel="noopener noreferrer">
								Go to Repo
						</a>
					</span>
				</p>
			  </div>

			  <div className="gallery-cell">
			  	<img src={Webventeer} className="project-img" alt="webventeer"/>
			  	<p className="project-text">
			  		<span className="project-title">Webventeer</span>
			  		<br />
			  		A website that helps users find volunteering events based on criteria. Uses Eventful API to find nearby events, Google Maps API 
			  		to pinpoint locations of events (if provided in Eventful API results), and Firebase for user logins. Deployed on Github Pages.
					<br />
					<br />
					<span>
						<a 
							href="https://mariuxiv08.github.io/Webventeer/index.html" 
							target="_blank" 
							className="btn btn-success project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go To Site
						</a>
					</span>
					<span>
						<a 
							href="https://github.com/Mariuxiv08/Webventeer" 
							target="_blank" 
							className="btn btn-danger project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go to Repo
						</a>
					</span>
				</p>
			  </div>

			  <div className="gallery-cell">
			  	<img src={BurgerEater} className="project-img" alt="burgereater"/>
			  	<p className="project-text">
			  		<span className="project-title">BurgerEater</span>
			  		<br />
			  		Type in your favorite burger and CONSUME! Uses MySQL database to store burgers, and a boolean value to check if
			  		burger has been consumed or note.
					<br />
					<br />
					<span>
						<a 
							href="https://guarded-taiga-69253.herokuapp.com/" 
							target="_blank" 
							className="btn btn-success project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go To Site
						</a>
					</span>
					<span>
						<a 
							href="https://github.com/aguirreh8/BurgerEater" 
							target="_blank" 
							className="btn btn-danger project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go to Repo
						</a>
					</span>
				</p>
			  </div>

			  <div className="gallery-cell">
			  	<img src={MemoryGame} className="project-img" alt="memorygame"/>
			  	<p className="project-text">
			  		<span className="project-title">Memory Game</span>
			  		<br />
			  		A memory game created in React. Updates user score and high score with states.
					<br />
					<br />
					<span>
						<a 
							href="https://aguirreh8.github.io/memoryGame/" 
							target="_blank" 
							className="btn btn-success project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go To Site
						</a>
					</span>
					<span>
						<a 
							href="https://github.com/aguirreh8/memoryGame" 
							target="_blank" 
							className="btn btn-danger project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go to Repo
						</a>
					</span>
				</p>
			  </div>

			  <div className="gallery-cell">
			  	<img src={Hangman} className="project-img" alt="hangman"/>
			  	<p className="project-text">
			  		<span className="project-title">Hangman</span>
			  		<br />
			  		A game of hangman. Picks a word from an array at random. Written in jQuery.
					<br />
					<br />
					<span>
						<a 
							href="https://aguirreh8.github.io/Hangman-Game/" 
							target="_blank" 
							className="btn btn-success project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go To Site
						</a>
					</span>
					<span>
						<a 
							href="https://github.com/aguirreh8/Hangman-Game" 
							target="_blank" 
							className="btn btn-danger project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go to Repo
						</a>
					</span>
				</p>
			  </div>

			  <div className="gallery-cell">
			  	<img src={What2Wear} className="project-img" alt="What2Wear"/>
			  	<p className="project-text">
			  		<span className="project-title">What 2 Wear</span>
			  		<br />
			  		An application that helps the user choose what to wear based on weather conditions.
					<br />
					<br />
					<span>
						<a 
							href="https://what2wear.glitch.me/" 
							target="_blank" 
							className="btn btn-success project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go To Site
						</a>
					</span>
					<span>
						<a 
							href="https://github.com/aguirreh8/what2wear" 
							target="_blank" 
							className="btn btn-danger project-link" 
							role="button" 
							rel="noopener noreferrer">
								Go to Repo
						</a>
					</span>
				</p>
			  </div> 

			


			</div>
		</div>
	</div>
)

export default Projects;