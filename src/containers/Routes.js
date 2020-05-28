import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Tareas from "./Tareas";
import Usuarios from "./Usuarios";

import { Users } from "../Data/Users";
import { Tasks } from "../Data/Tasks";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Tareas Tasks={Tasks} Users={Users} />
          </Route>
          <Route exact path="/Usuarios">
            <Usuarios Users={Users} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
