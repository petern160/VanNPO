import React from "react";
import "../css/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="start hero-c">
        <h1 className="home-title">Oncol-IG</h1>
        <NavLink className="enter-diagram" to="/">
          Click To View Diagram
        </NavLink>
        <div className="first-half">
  
          <h3 className="about-tagline">The study and treatment of tumors is called oncology, hence the name Oncol-IG.</h3> 
          
          <p className= "about-paragraph">
            The purpose of this project 
          is to make the process of learning about the most common types of cancer tumors with reliable medical info from
          fact-checked and peer reviewed sources. The site allows for interactive research and provid infomation on treatments and 
          preventive measures available. If you are in need to find a doctor to consult in person, we offer functionality to find a medical
          professional in your area for possible dianosis and treatments.     
          </p>
            
        </div>
      </div>
    </>
  );
};

export default About;
