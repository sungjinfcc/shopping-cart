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
      name: "Product 1",
      url: "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 300,
    },
    {
      name: "Product 2",
      url: "https://cdn.pixabay.com/photo/2013/10/05/10/42/apple-190970_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 700,
    },
    {
      name: "Product 3",
      url: "https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510529_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 130,
    },
    {
      name: "Product 4",
      url: "https://cdn.pixabay.com/photo/2014/10/31/10/00/camera-510524_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 100,
    },
    {
      name: "Product 5",
      url: "https://cdn.pixabay.com/photo/2020/09/23/20/27/headphones-5596987_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 200,
    },
    {
      name: "Product 6",
      url: "https://cdn.pixabay.com/photo/2018/01/20/06/41/earphone-3093921_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 250,
    },
    {
      name: "Product 7",
      url: "https://cdn.pixabay.com/photo/2014/10/31/10/00/lens-510527_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 70,
    },
    {
      name: "Product 8",
      url: "https://cdn.pixabay.com/photo/2022/05/26/14/27/camera-7223047_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 80,
    },
    {
      name: "Product 9",
      url: "https://cdn.pixabay.com/photo/2018/05/08/12/04/smartphone-3382876_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 900,
    },
    {
      name: "Product 10",
      url: "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510531_1280.jpg",
      description:
        "Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Et malesuada fames ac turpis.",
      price: 1300,
    },
  ]);

  const addToCart = (newItem) => {
    if (cart.some((item) => item.name === newItem.name)) {
      alert("Already in the cart!");
      return;
    }
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
        if (item.quantity === 1) {
          alert("Can't go down");
          return item;
        }
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
