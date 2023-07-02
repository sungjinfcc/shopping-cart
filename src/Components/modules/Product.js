import React from "react";

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.url} alt={product.name} className="product-image" />
      <p className="product-name">{product.name}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price} USD</p>
    </div>
  );
}

export default Product;
