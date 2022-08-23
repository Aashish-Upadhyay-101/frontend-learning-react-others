import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ShoppingItem from "./Components/ShoppingItem/ShoppingItem";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <ShoppingItem />
      </div>
    </CartProvider>
  );
};
export default App;
