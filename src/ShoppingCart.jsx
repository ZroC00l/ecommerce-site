import { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  constructor(props) {
    console.log("constructor of shopping cart");
    super(props);
    this.state = {
      products: [
        { id: 1, productName: "Nike boots", price: 800, quantity: 0 },
        { id: 2, productName: "Converse boots", price: 1000, quantity: 0 },
        { id: 3, productName: "Adidas boots", price: 1500, quantity: 0 },
        { id: 4, productName: "Reebook runners", price: 1450, quantity: 0 },
        { id: 5, productName: "Asics trainers", price: 1350, quantity: 0 },
        { id: 6, productName: "Ellese trainers", price: 1400, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render method of shopping cart");
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

  //Executes only after constructor and render methods have been executed(includes life cycle of child components if there any)
  componentDidMount() {
    //not going to write any code for now cause we are not making any http requests
    console.log("component mount in the shopping cart component ");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentUpdate - Shopping Cart",
      prevProps,
      prevState,
      this.props,
      this.state
    );

    /*Always make sure you make http requests conditionally and not uncondtionally to avoid performance issues,
    making them unconditionally leads to the update method being executed in each change of the state and props for each button click*/

    /*if (prevProps.x !== prevState.x) {
      //make http call
    }*/
  }

  componentWillUnmount() {
    console.log("Component Unmount - Shopping Cart");
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
