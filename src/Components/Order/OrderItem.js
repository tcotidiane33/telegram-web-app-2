// Components/OrderItem.js
import React from "react";
import { handleDecrement, handleDelete, handleIncrement } from "../../db/productSignals";

function OrderItem({ id, title, quantity, price, Image}) {
  return (
    <li key={id}>
      <img src={Image} alt={title} style={{ width: '50px', marginRight: '10px' }} />
      {title} - Quantity: 
      <button className="btns btn-remove" onClick={() => handleDecrement(id)}>➖</button>
      <strong className="btns">
        {quantity}
      </strong>
      <button className="btns btn-add" onClick={() => handleIncrement(id)}>➕</button>
      Price: XOF{price.toFixed(2)}
      <button className="btnx" onClick={() => handleDelete(id)}>Remove</button>
    </li>
  );
}

export default OrderItem;
