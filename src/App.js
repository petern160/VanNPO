import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Diagram from "./components/Diagram";
import Lungs from "./components/Lungs";
import Error from "./components/Error";

const App = props => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/diagram" component={Diagram} />
          <Route path="/lungs" component={Lungs} />
          <Route component={Error} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
