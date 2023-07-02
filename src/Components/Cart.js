import React from "react";
import CartItem from "./modules/CartItem";

function Cart({ cart, increment, decrement }) {
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.map((product) => (
          <CartItem
            product={product}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>
      <p>
        total: {cart.reduce((total, product) => total + product.quantity, 0)}{" "}
        items,{" "}
        {cart.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        )}
        USD
      </p>
    </div>
  );
}

export default Cart;
