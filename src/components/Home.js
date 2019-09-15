import React, { useState } from "react";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";

const Home = props => {
  const [changeopacity, setChangeOpacity] = useState("opacity 0");

  const opacityChange = () => {
    setChangeOpacity();
  };
  return (
    <div className="home-container">
      <Navbar />

      <div className="diagram">
        <p>
          Please click on the text to view more details on cancer about that
          organ.
        </p>
        <button className="btn btn-dark heart-b">Heart</button>
        <div className="heart-c"></div>
        <button className="btn btn-dark lungs-b">Lungs</button>
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

export default Home;
