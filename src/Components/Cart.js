import React from "react";
import CartItem from "./modules/CartItem";

function Cart({ cart, increment, decrement }) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="products-flex">
        {cart.map((product) => (
          <CartItem
            product={product}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>
      <div className="total">
        <p>total : </p>
        <div className="price">
          {cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )}{" "}
          USD
        </div>
      </div>
      <button className="checkout" type="button">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
