import { Component } from "react";
import Badge from "react-bootstrap/Badge";
import MediaQuery from "react-responsive";

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
        phone: null,
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
        phone: null,
        address: { city: "Kimberley" },
      },
      {
        id: 6,
        name: "Julian",
        phone: "",
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

          <tbody> {this.getCustomerRow()}</tbody>
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
  /*N>B!!!! Always use arrow head function in react when rendering methods*/
  getPhoneToRender = (phone) => {
    /* when you are faced with a complex conditional testing scenario its always best to 
    parse that conditional formatting into a method then render that specific method, the
    commented code below is for when the conditional testing is not complex and as such can be parsed 
    into a single line explicitly where its needed.*/
    /*{cust.phone ? (
      cust.phone
    ) : (
      <div className="no-phone">"No phone"</div>
    )}*/
    if (phone) {
      return phone;
    } else {
      return <div className="no-phone">No phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}

export default MainContent;
