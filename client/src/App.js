import React, { useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Search from "./components/Search/Search"

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
        <Route component={NoMatch} />qq
      </Switch>
  );
}qs                                 qq                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sqs

export default App;