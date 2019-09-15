import React, { useState } from "react";
import "../css/Diagram.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";

const Diagram = props => {
  const [changeopacity, setChangeOpacity] = useState("opacity 0");

  const opacityChange = () => {
    setChangeOpacity();
  };
  return (
    <div className="home-container">
      <Navbar />
      <div className="diagram">
        <p className="diagram-text">
          Click on a button to view more details on cancer about the organ
        </p>
        <button className="btn btn-dark heart-b">Heart</button>
        <div className="heart-c"></div>
        <Link className="lungs-b" to="/lungs">
          <button className="btn btn-dark">Lungs</button>
        </Link>
        <div className="lungs-c"></div>
        <button className="btn btn-dark brain-b">Brain</button>
        <div className="brain-c"></div>
        <button className="btn btn-dark liver-b">Liver</button>
        <div className="liver-c"></div>
        <button className="btn btn-dark stomach-b">Stomach</button>
        <div className="stomach-c"></div>
        <button className="btn btn-dark large-b">Large Intestines</button>
        <div className="large-c"></div>
        <button className="btn btn-dark small-b">Small Intestines</button>
        <div className="small-c"></div>
        <button className="btn btn-dark kidney-b">Kidney</button>
        <div className="kidney-c"></div>
      </div>
    </div>
  );
};

export default Diagram;
