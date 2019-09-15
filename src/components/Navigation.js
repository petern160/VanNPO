import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/diagram">Diagram </NavLink>
      <NavLink to="/lungs">Lungs</NavLink>
    </div>
  );
};

export default Navigation;
