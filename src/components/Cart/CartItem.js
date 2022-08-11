import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className="row row-content align-items-center border order-light rounded mb-2">
      <span>{props.id}</span>
      <div className="row">
        <h5>Name: {props.name}</h5>
        <span className="float-end">
          <img
            className={`rounded float-start img-thumbnail float-end ${classes.thumb_xs}`}
            src={props.image}
            alt="product"
          />
        </span>
        <h6>
          Amount: {props.amount}
          <span className="float-end">Price: {props.price}</span>
        </h6>
      </div>
    </li>
  );
};

export default CartItem;
