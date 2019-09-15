import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark primary-color nav-container">
          <div class="logo">
            <img src='/img/logo-only.png' alt="" className="logo-nav" />
          </div>
          <Link className='navbar-brand navbar-text' to='/'>
            Oncol-IG
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className='nav-link' id='home-text' to='/'>
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/diagram'>
                  Diagram
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/lungs'>
                  Lungs
                </Link>
              </li>
            </ul>

            <form className="form-inline">
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
