 import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

function Cart({ cartItems, onQuantityChange }) {
  const history = useHistory();

  const totalPrice = cartItems ? cartItems.reduce((a, c) => a + c.price * c.quantity, 0) : 0;

  const handleCheckout = () => {
    history.push("/order");
  };

  return (
    <div className="cart__container">
      {cartItems && cartItems.length === 0 ? "Panier" : (
        <>
          
          <Button
            title={`${cartItems && cartItems.length === 0 ? "Welcome Galatik Shop !" : "Voir mon Panier"} `}
            type={"checkout"}
            disable={cartItems && cartItems.length === 0 ? true : false}
            onClick={handleCheckout}
          />
        </>
      )}
    </div>
  );
}

export default Cart;