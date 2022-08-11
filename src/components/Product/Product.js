import "bootstrap/dist/css/bootstrap.css";
import "./Product.module.css";

import React, { useContext } from "react";
import AddProductForm from "./AddProductForm";
import CartContext from "../../store/cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  // const price = `$${props.price.toFixed(2)}`;
  // const price = `$${props.price}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price,
      image: props.image,
    });
  };

  return (
    <li className="row row-content align-items-center border order-light rounded mb-2">
      <div className="col-12 col-sm-4 order-sm-last col-md-9">
        <h3>{props.title}</h3>

        <h4>
          {props.category}
          <span
            className="badge rounded-pill bg-info text-dark mr-auto 
          float-end"
          >
            $ {props.price}
          </span>
        </h4>
      </div>
      <div className="col col-sm-4 order-sm-first col-md-3">
        <div className="media">
          <img
            className="d-flex mr-3 img-thumbnail align-self-center mx-auto thumbnail"
            src={props.image}
            alt="Prodcut"
          />
        </div>
      </div>
      <div className="col-12 order-sm-last">
        <p className="d-sm-block">{props.description}</p>
      </div>
      <div className="col-4 offset-8 order-sm-last">
        <AddProductForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Product;
