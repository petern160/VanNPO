import React, { useState } from "react";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = props => {
  return (
    <div className="home-container">
      <div className="head-alert"></div>
      <button className="btn btn-dark">button 1</button>
      <button className="btn btn-dark">button 2</button>
      <button className="btn btn-dark">button 3</button>
      <button className="btn btn-dark">button 4</button>
      <button className="btn btn-dark">button 5</button>
      <button className="btn btn-dark">button 6</button>
      <button className="btn btn-dark">button 7</button>
      <button className="btn btn-dark">button 8</button>
      <p>Home</p>
    </div>
  );
};

export default Home;
