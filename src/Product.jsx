import { Component } from "react";

class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted"> #{this.state.product.id}</div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>

            <div> R{this.state.product.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
