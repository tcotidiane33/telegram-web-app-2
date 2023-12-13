import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";
import Nav from "./Nav/Nav";
import Order from "./Order/Order";
import axios from "axios";

const { getData } = require("../db/db");
const products = getData();
const telegram = window.Telegram.WebApp;

// ... (importations)

function Home() {
  const [cartItems, setCartItems] = useState([]);

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

  const onRemove = (productId) => {
    const exist = cartItems.find((x) => x.id === productId);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== productId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === productId ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const handlePayment = async () => {
    try {
      // Votre logique de paiement ici
    } catch (error) {
      // Gérer les erreurs de paiement
    }
  };

  return (
    <>
      <h1 className="heading">Welcome Chekete</h1>
      <Cart cartItems={cartItems} onClick={handlePayment}/>
      <Nav />
      <div className="cards__container">
        {products.map((product) => (
          <Card
            product={product}
            key={product.id}
            onAdd={onAdd}
            onRemove={() => onRemove(product.id)}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <Order
        selectedProducts={cartItems}
        onPlaceOrder={handlePayment}
        onQuantityChange={handleQuantityChange}
        onDeleteProduct={(productId) => {
          // Mettez à jour l'état pour supprimer le produit avec l'ID spécifié
          setCartItems((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
          );
        }}
      />
    </>
  );
}

export default Home;

