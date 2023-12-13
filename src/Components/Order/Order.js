// Components/Order.js
import React, { useState } from "react";
import "./Order.css";
import OrderItem from "./OrderItem";

function Order({ selectedProducts, onPlaceOrder, onQuantityChange, onDeleteProduct }) {
  const [isCheckout, setIsCheckout] = useState(false);

  const calculateTotalPrice = (products) => {
    return products.reduce((total, { price, quantity }) => total + price * quantity, 0);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      onDeleteProduct(id);
    } else {
      onQuantityChange(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  return (
    <div>
      <h1 className="heading">Panier Cuisto Dingo</h1>
      {isCheckout ? (
        // Afficher les éléments sélectionnés lors du paiement
        <div>
          <h3>Selected Items:</h3>
          <ul>
            {selectedProducts.map(({ id, title, quantity, price, Image }) => (
              <OrderItem
                key={id}
                id={id}
                title={title}
                quantity={quantity}
                price={price}
                Image={Image}
                onQuantityChange={handleQuantityChange}
                onDeleteProduct={onDeleteProduct}
              />
            ))}
          </ul>
          <br />
          <span className="bold">Total Price: {calculateTotalPrice(selectedProducts).toFixed(2)}</span>
          <h3>Payment Form:</h3>
          <button className="btn btn-checkout" onClick={onPlaceOrder}>
            Place Order
          </button>
        </div>
      ) : (
        // Afficher le formulaire de paiement
        <div>
          <h3>Payment Form:</h3>
          <button className="btn btn-checkout" onClick={handleCheckout} disabled={selectedProducts.length === 0}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Order;
