import React from "react";
import { handleDecrement, handleDelete, handleIncrement } from "../../db/productSignals";
import './order.css';

function OrderItem({ id, title, quantity, price, Image }) {
  return (
    <div className="order-item-container card-wrap">
      
      <li className="order-item card">
        <img src={Image} alt={title} className="item-image card-bg" />
        <div className="item-details card-info">
          {/* <span className="item-title">{title}</span> */}
          {/* <span className="item-quantity">Quantity: {quantity}</span> */}
          <div className="item-buttons">
            <button className="btns btn-remove" onClick={() => handleDecrement(id)}>➖</button>
            <strong className="btns">{quantity}</strong>
            <button className="btns btn-add" onClick={() => handleIncrement(id)}>➕</button>
          </div>
          <span className="item-price">Price: XOF{price.toFixed(2)}</span>
          <button className="btnx" onClick={() => handleDelete(id)}>Remove</button>
        </div>
      </li>
    </div>
  );
}

export default OrderItem;
