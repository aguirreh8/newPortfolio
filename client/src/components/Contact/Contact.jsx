import React, {Component} from "react";
import "./Contact.css";
import github from "../../images/github.png";
import linkedIn from "../../images/linkedin.png";
import stackOverflow from "../../images/stackoverflow.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import API from "../../utils/API";
import REGEX from "../../utils/REGEX"

class Contact extends Component  {
	state = {
		name: "",
		sender: "",
		subject: "",
		message: "",
		textState: false,
		emailSentMessage: ""
	};

	handleInputChange = input => {
		const {name, value} = input.target;
		this.setState({ [name]: value });
	};

	validateEmail = email => {
	  const re = REGEX.emailValidator;
	  return re.test(email);
	}

	sendMail(name, sender, subject, message) {
		if (name && sender && subject && message) {
			if (this.validateEmail(sender))
			{
				const data = {
					name,
					sender,
					subject,
					message
				};
				API.sendMail(data)
				.then(
					this.setState({
						textState: true,
						emailSentMessage: "Email Sent!" 
					})
				);
			} 
			else {
				this.setState({
					textState: false,
					emailSentMessage: "Invalid Email." 
				})
			}
		}
		else {
			this.setState({
					textState: false,
					emailSentMessage: "Please fill out the form." 
			})
		}
		
	};

	render() {
		return (
			<div className="component-holder contact">
				<div className="container">
					<h4 className="title">Contact Me</h4>
					<div className="row">
						<div className="col-md-5">
							<p>If you would like to contact me, or know more, check any of the links below. You can use the provided form to directly send an email.</p>
							<a 
								className="ext-link" 
								href="https://github.com/aguirreh8" 
								target="_blank" 
								rel="noopener noreferrer">
									<img src={github} className="thumbnail" alt="github"/>
									Github
							</a>
							<a 
								className="ext-link"
								href="https://www.linkedin.com/in/henry-aguirre-6b9469a1" 
								target="_blank" 
								rel="noopener noreferrer">
								<img src={linkedIn} className="thumbnail" alt="github"/>
								LinkedIn
							</a>
							<a 
								className="ext-link"
								href="https://stackoverflow.com/users/8903394/henry" 
								target="_blank" 
								rel="noopener noreferrer">
								<img src={stackOverflow} className="thumbnail" alt="github"/>
								Stack Overflow
							</a>
							<a 
								className="ext-link">
								<img src={email} className="thumbnail" alt="github"/>
								aguirreh8@gmail.com
							</a>
							<a 
								className="ext-link">
								<img src={phone} className="thumbnail" alt="github"/>
								551-222-9775
							</a>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-6">
							<form>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Name:</label>
									<div className="col-sm-9">
										<input 
											type="input" 
											className="form-control"
											name="name"
											onChange={this.handleInputChange}
											value={this.state.name} 
											placeholder="Enter name" />
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Email:</label>
									<div className="col-sm-9">
										<input 
											type="email" 
											className="form-control"
											name="sender"
											onChange={this.handleInputChange}
											value={this.state.sender}  
											placeholder="Enter email" />
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Subject:</label>
									<div className="col-sm-9">
										<input 
											type="input" 
											className="form-control"
											name="subject"
											onChange={this.handleInputChange}
											value={this.state.subject}  
											placeholder="Enter subject" />
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Message:</label>
									<div className="col-sm-9">
										<textarea 
											className="form-control" 
											rows="5" 
											style={{resize: "none"}}
											name="message"
											onChange={this.handleInputChange}
											value={this.state.message}  
											placeholder="Enter subject"></textarea>
									</div>
								</div>
								<div className="form-group row">
									<button 
										type="button"
										onClick={
											() => 
											this.sendMail(
												this.state.name,
												this.state.sender,
												this.state.subject,
												this.state.message
											)
										} 
										className="btn btn-primary btn-lg mx-auto">
											Send
									</button>
									<p className={ 
										this.state.textState ? 
										"text-success font-weight-bold" : "text-danger font-weight-bold" }>{this.state.emailSentMessage}</p>
								</div>
							</form>					
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;