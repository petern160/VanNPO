import React, { useState } from "react";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = props => {
  return (
    <div className="home-container">
      <div className="diagram">
        <button className="btn btn-dark heart-b">Heart</button>
        <button className="btn btn-dark lungs-b">Lungs</button>
        <button className="btn btn-dark brain-b">Brain</button>
        <button className="btn btn-dark liver-b">Liver</button>
        <button className="btn btn-dark stomach-b">Stomach</button>
        <button className="btn btn-dark large-b">Large Intestines</button>
        <button className="btn btn-dark small-b">Small Intestines</button>
        <button className="btn btn-dark kidney-b">Kidney</button>
      </div>
    </div>
  );
};

export default Home;
