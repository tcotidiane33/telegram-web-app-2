import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";
import Nav from "./Nav/Nav";
import { cartItems } from "../db/productSignals";
const { getData } = require("../db/db");
const products = getData();
const telegram = window.Telegram.WebApp;

// ... (importations)

function Home() {

  return (
    <>
      <h1 className="heading">Welcome Chekete</h1>
      <Cart cartItems={cartItems} />
      <Nav />
      <div className="cards__container">
        {products.map((product) => (
          <Card
            product={product}
            key={product.id}
          />
        ))}
      </div>
      {/* <Order
        selectedProducts={cartItems}
        onPlaceOrder={handlePayment}
        onQuantityChange={handleQuantityChange}
        onDeleteProduct={(productId) => {
          // Mettez à jour l'état pour supprimer le produit avec l'ID spécifié
          setCartItems((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
          );
        }}
      /> */}
    </>
  );
}

export default Home;

