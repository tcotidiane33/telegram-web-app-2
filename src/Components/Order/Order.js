// Components/Order.js
import React, { useState } from "react";
import "./Order.css";
import OrderItem from "./OrderItem";
import { computed } from "@preact/signals-react";
import { cartItems } from "../../db/productSignals";

function Order() {

  const calculateTotalPrice = computed(()=> {
    return cartItems.value.length>0 ?cartItems.value.map((checkItem)=>{
      return checkItem.price * checkItem.quantity
    }).reduce((previous, next)=> previous + next):0
  });



  return (
    <div>
      <h1 className="heading">Panier Cuisto Dingo</h1>
      {true ? (
        // Afficher les éléments sélectionnés lors du paiement
        <div>
          <h3>Selected Items:</h3>
          <ul>
            {cartItems.value.map(({ id, title, quantity, price, Image }) => (
              <OrderItem
                key={id}
                id={id}
                title={title}
                quantity={quantity}
                price={price}
                Image={Image}
                
              />
            ))}
          </ul>
          <br />
          <span className="bold">Total Price: {calculateTotalPrice}</span>
          <h3>Payment Form:</h3>
          <button className="btn btn-checkout" >
            Place Order
          </button>
        </div>
      ) : (
        // Afficher le formulaire de paiement
        <div>
          <h3>Payment Form:</h3>
          <button className="btn btn-checkout"  disabled={cartItems.value.length === 0}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Order;
