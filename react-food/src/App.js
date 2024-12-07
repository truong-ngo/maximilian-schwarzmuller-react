import logo from "./logo.svg";
import "./App.css";
import Card from "./components/UI/Card";
import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Cart />
      <Header />
      <Meals />
    </CartProvider>
  );
}

export default App;
