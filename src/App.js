import React, { useState } from "react";
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      name: "product 1",
      url: "url 1",
      description: "Good product",
      price: 3000,
    },
    {
      name: "product 2",
      url: "url 2",
      description: "Bad product",
      price: 7000,
    },
    {
      name: "product 3",
      url: "url 3",
      description: "product",
      price: 13000,
    },
  ]);

  const addToCart = (newItem) => {
    if (cart.some((item) => item.name === newItem.name)) return;
    setCart([...cart, newItem]);
  };

  const increment = (e) => {
    const productName = e.target.parentNode.parentNode.children[0].textContent;
    setCart(
      cart.map((item) => {
        if (item.name !== productName) return item;
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      })
    );
  };

  const decrement = (e) => {
    const productName = e.target.parentNode.parentNode.children[0].textContent;
    setCart(
      cart.map((item) => {
        if (item.name !== productName) return item;
        if (item.quantity === 1) return item; // Can't go 0
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      })
    );
  };

  return (
    <HashRouter>
      <header>
        <Link to="/">home</Link>
        <Link to="shop">shop</Link>
        <Link to="cart">
          cart ({cart.reduce((total, product) => total + product.quantity, 0)})
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="shop"
          element={<Shop products={products} addToCart={addToCart} />}
        />
        <Route
          path="cart"
          element={
            <Cart cart={cart} increment={increment} decrement={decrement} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

/*
`Router: Home, Shop, Cart(Side bar)
  Home - Label, Link to shop, some background image
  Shop - Product card(image, name, description, price, add to cart button) * 10 ? Grid
  Cart - Product review card (Image, name, price, quantity, delete button) + total price, checkout button (alert returns to home)
State: checked items(name, image, quantity, price),
*/
