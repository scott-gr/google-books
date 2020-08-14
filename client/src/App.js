import React, { useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
  );
}

export default App;