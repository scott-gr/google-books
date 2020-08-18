import React, { useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Saved from "./components/Saved/Saved.jsx"

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
        <Route exact path="/search" component={Search} />
        <Route exact path="/save" component={Saved} />
        <Route component={NoMatch} />qq
      </Switch>
  );
}
export default App;