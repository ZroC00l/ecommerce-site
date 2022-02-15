import React, { Component } from "react";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
