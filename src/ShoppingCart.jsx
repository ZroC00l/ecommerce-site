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
                onDelete={this.handleDelete}
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
  handleIncrement = (product, maxValue) => {
    /* copy the products array into a temp array*/
    let allProducts = [...this.state.products];

    let index = allProducts.indexOf(product);

    /*Don't increment quantity above the set maxValue condition*/
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
    }

    //Update the state of the current component(parent component)
    this.setState({
      products: allProducts,
    });
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];

    let index = allProducts.indexOf(product);
    /*Don't decrement the quantity below the minValue condition*/
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
    }

    this.setState({
      products: allProducts,
    });
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];

    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to remove?")) {
      allProducts.splice(index, 1);
      this.setState({
        products: allProducts,
      });
    }
  };
}

export default ShoppingCart;
