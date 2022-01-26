import React, { Component } from "react";

/*React allows nesting of html tags using the div tag, without wrapping multiple tags within it
this will lead to failiur of the code to compile by BABEL javascript compiler

You can also use the <React.Fragment></React.Fragment> tag to achive the same above effect, the only 
difference is that it doesnt render extra div tags as in using the above method 
*/
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-style">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              SneakerPlug
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a class="nav-link active" aria-current="page" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Kids
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
