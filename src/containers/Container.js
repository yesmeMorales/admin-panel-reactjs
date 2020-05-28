import React, { Component } from "react";

import AppNav from "../components/AppNav";
import Routes from "./Routes";

class Container extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNav />
        <Routes />
      </React.Fragment>
    );
  }
}

export default Container;
