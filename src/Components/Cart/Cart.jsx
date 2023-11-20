import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom"; // Importez useHistory depuis react-router-dom

function Cart({ cartItems }) {
  const history = useHistory();

  // Assurez-vous que cartItems est défini avant d'utiliser reduce
  const totalPrice = cartItems ? cartItems.reduce((a, c) => a + c.price * c.quantity, 0) : 0;

  const handleCheckout = () => {
    // Naviguez vers la page de paiement (Cinetpay)
    history.push("/order");
  };

  return (
    <div className="cart__container">
      {cartItems && cartItems.length === 0 ? "No items in cart" : ""}
      <br /> <span className="bold">Total Price: XOF{totalPrice.toFixed(2)}</span>
      <Button
        title={`${cartItems && cartItems.length === 0 ? "Welcome to Cuisto Dingo !" : "Buy"} `}
        type={"checkout"}
        disable={cartItems && cartItems.length === 0 ? true : false}
        onClick={handleCheckout} // Utilisez la nouvelle fonction handleCheckout pour la navigation
      />
    </div>
  );
}

export default Cart;
