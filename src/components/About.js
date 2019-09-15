import React from "react";
import "../css/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="start hero-c">
        <Navbar />
        <h1 className="home-title">Oncol-IG</h1>
        <NavLink className="enter-diagram" to="/">
          Click To View Diagram
        </NavLink>
        <div className="first-half">
          test Culpa officia eiusmod adipisicing ut veniam amet id officia sit
          consequat ipsum et ex nostrud. Et elit dolor mollit laboris. Ullamco
          commodo cupidatat proident eu tempor cupidatat anim cillum eu ipsum
          excepteur non ipsum. Sunt est laborum ipsum cupidatat cupidatat aute
          velit magna non deserunt.
        </div>
      </div>
    </>
  );
};

export default About;
