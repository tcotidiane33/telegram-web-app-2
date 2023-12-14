// App.js
import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Order from "./Components/Order/Order";
import Category from "./Components/Category";
import { getData } from "./db/db"; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = getData(); // Call getData to get products

  const onPlaceOrder = () => {
    // Place Order Logic
    // You may want to send the order to the server, update the database, etc.
    alert("Order Placed!");
  };

  const onQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      return updatedItems;
    });
  };

  const onDeleteProduct = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/order"
          render={(props) => (
            <Order/>
          )}
        />
        <Route path="/category" component={Category} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
