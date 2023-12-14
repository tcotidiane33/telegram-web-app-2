import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import { cartItems } from "../../db/productSignals";
import {computed} from '@preact/signals-react'

function Cart() {
  const history = useHistory();

  const calculateTotalPrice = computed(()=> {
    return  cartItems.value.length>0? cartItems.value.map((checkItem)=>{
      return checkItem.price * checkItem.quantity
    }).reduce((previous, next)=> previous + next):0
  });

  const handleCheckout = () => {
    history.push("/order");
  };

  return (
    <div className="cart__container">
      {cartItems.value.length === 0 ? "Panier" : (
        <>
          
          <Button
            title={`${cartItems.value.length === 0 ? "Welcome Galatik Shop !" : "Voir mon Panier"} `}
            type={"checkout"}
            disable={cartItems.value.length === 0 ? true : false}
            onClick={handleCheckout}
          />
        </>
      )}
    </div>
  );
}

export default Cart;