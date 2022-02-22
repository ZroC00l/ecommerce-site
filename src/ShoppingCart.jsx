import { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "Nike boots", price: 800, quantity: 0 },
      { id: 2, productName: "Converse boots", price: 1000, quantity: 0 },
      { id: 3, productName: "Adidas boots", price: 1500, quantity: 0 },
      { id: 4, productName: "Reebook runners", price: 1450, quantity: 0 },
      { id: 5, productName: "Asics trainers", price: 1350, quantity: 0 },
      { id: 6, productName: "Ellese trainers", price: 1400, quantity: 0 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              >
                <button id="myButton" className="btn btn-primary">
                  Buy Now
                </button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  handleIncrement = (product) => {
    //console.log("handleIncrement", product);
    /* copy the products array into a temp array*/
    let allProducts = [...this.state.products];

    let index = allProducts.indexOf(product);
    //console.log(allProducts[index]);
    allProducts[index].quantity++;

    this.setState({
      products: allProducts,
    });
  };

  handleDecrement = (product) => {
    //console.log("handle Decrement", product);

    let allProducts = [...this.state.products];

    let index = allProducts.indexOf(product);

    allProducts[index].quantity--;

    this.setState({
      products: allProducts,
    });
  };
}

export default ShoppingCart;
