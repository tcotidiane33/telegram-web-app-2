import React from "react";
import "./Button/Button.css";

function Order({ selectedProducts, onPlaceOrder, onQuantityChange, onDeleteProduct }) {
  const calculateTotalPrice = (products) => {
    return products.reduce((total, { price, quantity }) => total + price * quantity, 0);
  };

  const handleQuantityChange = (id, newQuantity) => {
    // Votre logique pour changer la quantité du produit
    if (newQuantity <= 0) {
      // Si la nouvelle quantité est inférieure ou égale à zéro, supprimer le produit
      onDeleteProduct(id);
    } else {
      // Sinon, appeler la fonction onQuantityChange
      onQuantityChange(id, newQuantity);
    }
  };


  return (
    <div>
      <h1 className="heading">Panier Cuisto Dingo</h1>
      {selectedProducts.length > 0 ? (
        <div>
          {/* Afficher les éléments sélectionnés */}
          <h3>Cart Items:</h3>
          <ul>
            {selectedProducts.map(({ id, title, quantity, price, Image }) => (
              <li key={id}>
                <img src={Image} alt={title} style={{ width: '50px', marginRight: '10px' }} />
                {title} - Quantity: 
                <button className="btns btn-remove" onClick={() => onQuantityChange(id, quantity - 1)}>-</button>
                <strong className="btns">
                  {quantity}
                </strong>
                <button className="btns btn-add" onClick={() => onQuantityChange(id, quantity + 1)}>+</button>
                - Price: XOF{price.toFixed(2)}
                <button className="btns btn-remove" onClick={() => onDeleteProduct(id)}>Remove</button>
              </li>
            ))}
          </ul>
          <br />
          <span className="bold">Total Price: XOF{calculateTotalPrice(selectedProducts).toFixed(2)}</span>
          
          {/* Ajouter le formulaire de paiement ici */}
          <h3>Payment Form:</h3>
          {/* Votre formulaire de paiement */}
          <button className="btn btn-checkout" onClick={onPlaceOrder}>Place Order</button>
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
}

export default Order;
