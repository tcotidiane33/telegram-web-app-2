import React from "react";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";

function Order({ selectedProducts, onAdd, onRemove, handleIncrement }) {
  const onQuantityChange = (productId, newQuantity) => {
    console.log(`Change quantity of product ${productId} to ${newQuantity}`);
  };

  const displayProduct = (productId) => {
    const product = selectedProducts.find((p) => p.id === productId);
    console.log(`Display product with ID ${productId}:`, product);
  };

  const displayTotalPrice = (productId) => {
    const productsWithId = selected Products.filter((p) => p.id === productId);
    const totalPrice = productsWithId.reduce((total, { price, quantity }) => total + price * quantity, 0);
    console.log(`Total price of products with ID ${productId}: XOF${totalPrice.toFixed(2)}`);
  };

  const cartItems = selectedProducts || [];

  const totalPrice = cartItems.reduce((total, { price, quantity }) => total + price * quantity, 0);

  const isOrderComponent = true; // Définir cette variable à true car vous êtes dans le composant Order

  return (
    <>
      <h1 className="heading">Panier Cuisto Dingo</h1>
      <div>
        <h3>Cart Items:</h3>
        {cartItems.length > 0 ? (
          <>
            <ul>
              {cartItems.map(({ id, title, quantity, price }) => (
                <li key={id}>
                  {title} - Quantity: {quantity} - Price: XOF{price.toFixed(2)}
                </li>
              ))}
            </ul>
            <br />
            <span className="bold">Total Price: XOF{totalPrice.toFixed(2)}</span>
          </>
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
      <div className="cards__container">
        {cartItems.map((product) => (
          <Card
            product={product}
            key={product.id}
            onAdd={onAdd}
            onRemove={onRemove}
            handleIncrement={handleIncrement}
            selectedProducts={selectedProducts}
            onDisplayProduct={displayProduct}
            onDisplayTotalPrice={displayTotalPrice}
            isOrderComponent={isOrderComponent} // Passer la variable à Card.js
          />
        ))}
      </div>

      <Cart cartItems={cartItems} onQuantityChange={onQuantityChange} />
    </>
  );
}

export default Order;

