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
          {/*Card body ends here*/}
          <div className="card-footer text-right">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>
              <div class="btn-group">
                <button className="btn btn-outline-success">+</button>
                <button className="btn btn-outline-success">-</button>
              </div>
            </div>
            {/*float left ends here*/}
            <div className="float-right">{this.props.children}</div>
          </div>
          {/*card footer ends her*/}
        </div>
      </div>
    );
  }
}
export default Product;
