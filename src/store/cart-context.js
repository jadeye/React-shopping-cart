import React from "react";

const CartContext = React.createContext({
  items: [],
  localStorageItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
