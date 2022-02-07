import { Component } from "react";
import Badge from "react-bootstrap/Badge";

class MainContent extends Component {
  /* keyword 'state' is an object that renders data dynamically in real world projects*/
  // eslint-disable-next-line no-undef
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Jane", phone: "788 - 2221" },
      { id: 2, name: "James", phone: "789 - 2222" },
      { id: 3, name: "Penny", phone: "790 - 3221" },
      { id: 4, name: "Paul", phone: "791 - 3321" },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="m-2">
            <Badge bg="secondary">{this.state.customersCount}</Badge>
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Phone</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 6,
    });
  };
}

export default MainContent;
