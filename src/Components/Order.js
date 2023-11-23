import React from "react";

function Order({ selectedProducts, onPlaceOrder, onQuantityChange }) {
  return (
    <div>
      <h1 className="heading">Panier Cuisto Dingo</h1>
      {selectedProducts.length > 0 ? (
        <div>
          {/* Afficher les éléments sélectionnés */}
          <h3>Cart Items:</h3>
          <ul>
          {selectedProducts.map(({ id, title, quantity, price, image }) => (
            <li key={id}>
              <img src={image} alt={title} style={{ width: '50px', marginRight: '10px' }} />
              {title} - Quantity: 
              <button onClick={() => onQuantityChange(id, quantity - 1)}>-</button>
              {quantity}
              <button onClick={() => onQuantityChange(id, quantity + 1)}>+</button>
              - Price: XOF{price.toFixed(2)}
            </li>
          ))}
          </ul>
          <br />
          <span className="bold">Total Price: XOF{calculateTotalPrice(selectedProducts).toFixed(2)}</span>
          
          {/* Ajouter le formulaire de paiement ici */}
          <h3>Payment Form:</h3>
          {/* Votre formulaire de paiement */}
          <button onClick={onPlaceOrder}>Place Order</button>
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
}

const calculateTotalPrice = (products) => {
  return products.reduce((total, { price, quantity }) => total + price * quantity, 0);
};

export default Order;
