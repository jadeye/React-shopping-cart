import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Product from "../Product/Product";
//import classes from "../Product/Product.module.css";

/* 
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
*/
const ProductList = (props) => {
  return (
    <div className="container">
      {props.products.map((product) => (
        <Product
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
