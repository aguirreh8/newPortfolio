import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Greeter from "./components/Greeter";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
	
    render() {
        return (
          <div>
            <Header /> 
            <Greeter />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        );
    }
}

export default App;
