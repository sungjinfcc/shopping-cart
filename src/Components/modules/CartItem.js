import React from "react";

function CartItem({ product, increment, decrement }) {
  return (
    <div className="cart-item">
      <div className="img-container">
        <img src={product.url} alt={product.name} className="item-image" />
      </div>
      <div className="cart-content">
        <p className="item-name">{product.name}</p>
        <p className="item-price">{product.price}</p>
        <div className="cart-buttons">
          <button type="button" onClick={decrement}>
            -
          </button>
          <input value={product.quantity} />
          <button type="button" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
