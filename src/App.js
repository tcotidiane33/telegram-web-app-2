// App.js
import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Category from "./Components/Category";
import Cinetpay from "./Components/Cinetpay/Cinetpay";
import Notify from "./Components/Cinetpay/Notify";
import Return from "./Components/Cinetpay/Return";
import Cancel from "./Components/Cinetpay/Cancel";
import Payment from "./Components/Cinetpay/PaymentButton";
import { getData } from "./db/db"; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = getData(); // Call getData to get products
  const handleAddToCart = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        return prevItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevItems, { ...products.find(p => p.id === productId), quantity: 1 }];
      }
    });
  };
  const onAdd = (productId) => {
    // ... votre logique d'ajout au panier
  
    console.log("Cart items after adding:", cartItems);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem.quantity === 1) {
        return prevItems.filter(item => item.id !== productId);
      } else {
        return prevItems.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item);
      }
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order" exact render={(props) => <Order {...props} selectedProducts={cartItems} />} />
        <Route path="/category" component={Category} />
        <Route path="/cinetpay" component={Cinetpay} />
        <Route path="/notify" component={Notify} />
        <Route path="/payment" component={Payment} />
        <Route path="/return" component={Return} />
        <Route path="/cancel" component={Cancel} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
