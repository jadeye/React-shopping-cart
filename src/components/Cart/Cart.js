import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let cartProducts = "";
  let totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const hasLocalStorgaeItems =
    cartCtx.localStorageItems !== null
      ? cartCtx.localStorageItems.length > 0
      : "";

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddeHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  if (hasItems) {
    cartProducts = cartCtx.items;
  } else if (!hasItems && hasLocalStorgaeItems) {
    cartProducts = JSON.parse(cartCtx.localStorageItems);
    totalAmount = cartProducts
      .reduce((r, d) => r + d.price * d.amount, 0)
      .toFixed(2);
  } else {
    cartProducts = [];
  }
  const CartItems = (
    <ul className={`${classes["cart-items"]} align-items-center ${classes.ul}`}>
      {cartProducts.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddeHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <div>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {/* <div className={classes.actions}>
        {hasItems && <button className={classes.button}>Order</button>}
      </div> */}
    </div>
  );
};

export default Cart;
