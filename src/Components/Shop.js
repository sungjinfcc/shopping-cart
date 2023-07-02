import React from "react";
import Product from "./modules/Product";

function Shop({ products, addToCart }) {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <div>
              <Product product={product} />
              <button
                type="button"
                onClick={() =>
                  addToCart({
                    name: product.name,
                    url: product.url,
                    description: product.description,
                    price: product.price,
                    quantity: 1,
                  })
                }
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
