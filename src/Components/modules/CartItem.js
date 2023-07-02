import React from "react";

function CartItem({ product, increment, decrement }) {
  return (
    <div>
      <p className="item-image">{product.url}</p>
      <div>
        <p className="item-name">{product.name}</p>
        <p className="item-price">{product.price}</p>
        <div>
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
