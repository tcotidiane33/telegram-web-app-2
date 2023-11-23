import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";
import Nav from "./Nav/Nav";
import Order from "./Order";
import axios from "axios";
import './Cinetpay/Payment.css';

const { getData } = require("../db/db");
const products = getData();
const telegram = window.Telegram.WebApp;

function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentResponse, setPaymentResponse] = useState(null);

  useEffect(() => {
    telegram.ready();
  }, []);
  const handleQuantityChange = (productId, newQuantity) => {
    // Votre logique pour changer la quantité du produit
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const onAdd = (productId) => {
    const exist = cartItems.find((x) => x.id === productId);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === productId ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...products.find((p) => p.id === productId), quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const handlePayment = async () => {
    try {
      // Votre logique de paiement ici
    } catch (error) {
      setPaymentResponse({
        code: "ERROR",
        message: "Erreur lors du paiement",
        description: error.message,
      });
    }
  };

  return (
    <>
      <h1 className="heading">Welcome Cuisto Dingo</h1>
      <Cart cartItems={cartItems} onClick={handlePayment}/>
      <Nav />
      <div className="cards__container">
        {products.map((product) => (
          <Card
          product={product}
          key={product.id}
          onAdd={onAdd}
          onRemove={onRemove}
          onQuantityChange={handleQuantityChange} // Assurez-vous de transmettre cette fonction
        />
        ))}
      </div>
      <Order
        selectedProducts={cartItems}
        onPlaceOrder={handlePayment}
        onQuantityChange={handleQuantityChange}
      />
    </>
  );
}

export default Home;
