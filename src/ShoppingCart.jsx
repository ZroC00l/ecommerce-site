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
    ],
  };
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div>
          {this.state.products.map((prod) => {
            return <Product />;
          })}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
