// Components/OrderItem.js
import React from "react";

function OrderItem({ id, title, quantity, price, Image, onQuantityChange, onDeleteProduct }) {
  return (
    <li key={id}>
      <img src={Image} alt={title} style={{ width: '50px', marginRight: '10px' }} />
      {title} - Quantity: 
      <button className="btns btn-remove" onClick={() => onQuantityChange(id, quantity - 1)}>➖</button>
      <strong className="btns">
        {quantity}
      </strong>
      <button className="btns btn-add" onClick={() => onQuantityChange(id, quantity + 1)}>➕</button>
      Price: XOF{price.toFixed(2)}
      <button className="btnx" onClick={() => onDeleteProduct(id)}>Remove</button>
    </li>
  );
}

export default OrderItem;
