import { Component } from "react";
import Badge from "react-bootstrap/Badge";

class MainContent extends Component {
  /* keyword 'state' is an object that renders data dynamically in real world projects*/
  // eslint-disable-next-line no-undef
  state = { pageTitle: "Customers", customersCount: 5 };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="m-2">
            <Badge bg="secondary">{this.state.customersCount}</Badge>
          </span>
        </h4>
      </div>
    );
  }
}

export default MainContent;
