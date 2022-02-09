import { Component } from "react";
import Badge from "react-bootstrap/Badge";

class MainContent extends Component {
  /* keyword 'state' is an object that renders data dynamically in real world projects*/
  // eslint-disable-next-line no-undef
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Jane",
        phone: "788 - 2221",
        address: { city: "Pretoria" },
      },
      {
        id: 2,
        name: "James",
        phone: "789 - 2222",
        address: { city: "Johannesburg" },
      },
      {
        id: 3,
        name: "Penny",
        phone: "",
        address: { city: "Cape-Town" },
      },
      {
        id: 4,
        name: "Paul",
        phone: "791 - 3321",
        address: { city: "Polokwane" },
      },
      {
        id: 5,
        name: "Susan",
        phone: "",
        address: { city: "Kimberley" },
      },
      {
        id: 6,
        name: "Julian",
        phone: null,
        address: { city: "Durban" },
      },
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
          <button className="btn btn-warning m-2" onClick={this.onReturnClick}>
            Return
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Phone</td>
              <td>City</td>
            </tr>
          </thead>

          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>
                    {cust.phone ? (
                      cust.phone
                    ) : (
                      <div className="no-phone">"No phone"</div>
                    )}
                  </td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: this.state.customersCount + 1,
    });
  };

  onReturnClick = () => {
    this.setState({
      customersCount: this.state.customersCount - 1,
    });
  };
}

export default MainContent;
