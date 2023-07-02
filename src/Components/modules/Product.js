import React from "react";

function Product({ product }) {
  return (
    <div>
      <p className="product-image">{product.url}</p>
      <p className="product-name">{product.name}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
    </div>
  );
}

export default Product;
