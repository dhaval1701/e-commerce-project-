// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} onRemoveToCart={removeFromCart} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
