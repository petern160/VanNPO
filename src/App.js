import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

const App = props => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
