import React from "react";
import ReactDom from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./App";
import "./index.css";

//var element = <button class="btn btn-danger">Hello World</button>;
ReactDom.render(<NavBar />, document.getElementById("root"));
