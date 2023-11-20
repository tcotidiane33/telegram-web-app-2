import React from "react";
import Card from "./Card/Card";

function Order({ selectedProducts, onPlaceOrder, products, onAdd, onRemove, handleIncrement }) {
  const getTotalItemsAndQuantity = () => {
    let totalItems = 0;
    let totalQuantity = 0;
    let totalPrice = 0;

    // Assurez-vous que selectedProducts est défini avant d'itérer
    if (selectedProducts) {
      selectedProducts.forEach((product) => {
        totalItems++;
        totalQuantity += product.quantity;
        totalPrice += product.price * product.quantity;
      });
    }

    return { totalItems, totalQuantity, totalPrice };
  };

  const { totalItems, totalQuantity, totalPrice } = getTotalItemsAndQuantity();

  return (
    <>
      <h1 className="heading">Welcome Cuisto Dingo</h1>
      <div className="cards__container">
        {selectedProducts && selectedProducts.map((product) => (
          <Card
            product={product}
            key={product.id}
            onAdd={onAdd}
            onRemove={onRemove}
            handleIncrement={handleIncrement}
          />
        ))}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Total Items: {totalItems}</p>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: {totalPrice} XOF</p>
        <button onClick={onPlaceOrder}>Place Order</button>
      </div>
    </>
  );
}

export default Order;

