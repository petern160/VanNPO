import React from "react";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="start hero-c">
        <Navbar />
        <h1 className="home-title">Oncol-IG</h1>
        <NavLink className="enter-diagram" to="/diagram">
          Click To View Diagram
        </NavLink>
        <div className="first-half">
          <p className="about-paragraph">
            The purpose of this project is to make the process of learning about
            the most common types of cancer tumors with reliable medical info
            from fact-checked and peer reviewed sources. The site allows for
            interactive research and provid infomation on treatments and
            preventive measures available. If you are in need to find a doctor
            to consult in person, we offer functionality to find a medical
            professional in your area for possible dianosis and treatments.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
