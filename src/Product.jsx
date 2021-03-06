import { Component } from "react";

class Product extends Component {
  constructor() {
    console.log("Product Component constructor");
    super();

    this.state = {
      product: this.props.product,
    };
  }

  render() {
    console.log("Render method of PRoduct component");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              {" "}
              #{this.state.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>

            <div> R{this.state.product.price}</div>
          </div>
          {/*Card body ends here*/}
          <div className="card-footer">
            <span className="float-left">
              <span className="badge text-dark">
                {this.state.product.quantity}
              </span>
              <div class="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </span>
            {/*float left ends here*/}
            <span className="float-right">{this.props.children}</span>
          </div>
          {/*card footer ends her*/}
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("ComponentDidMount - Product component");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate - Product component");
  }
  componentWillUnmount() {
    console.log("Component Unmount - Product Cart");
    //Here you can write code to cancel http requests if there any
  }
}
export default Product;
