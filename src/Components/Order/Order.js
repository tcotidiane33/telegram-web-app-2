// Components/Order.js
import React from "react";
import { useHistory } from "react-router-dom";
import "./order.css";
import OrderItem from "./OrderItem";
import { computed } from "@preact/signals-react";
import { cartItems } from "../../db/productSignals";
import Nav from "../Nav/Nav";

function Order() {
  const history = useHistory();

  const calculateTotalPrice = computed(()=> {
    return cartItems.value.length>0 ?cartItems.value.map((checkItem)=>{
      return checkItem.price * checkItem.quantity
    }).reduce((previous, next)=> previous + next):0
  });



  return (
    <div>
      <h1 className="heading">Panier Chekete</h1>
      <Nav/>
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
          <span className="bold heading">Total Price: {calculateTotalPrice}</span>
          <h3>Payment Form:</h3>
          <button className="btn btn-checkout" onClick={() => history.push("/payRequest")}>
            Passer Votre Commande
          </button>


        </div>
    </div>
  );
}

export default Order;
