import React, { useState } from "react";
import { handleIncrement, handleDecrement , cartItems} from "../../db/productSignals";
import "./Card.css";
import Button from "../Button/Button";
import { computed ,effect } from "@preact/signals-react";

function Card({ product }) {
  const isSelected = false; 
  const count = computed(()=> cartItems.value.find((prd)=>{ 
    if(product.id == prd.id){
      return prd.quantity
    }
    return 0
  }));
  effect(()=> console.log(count));

  return (
    <div className={`card ${isSelected ? "card--selected" : ""}`}>
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>

      <div className="image__container">
        <img src={product.Image} alt={product.title} />
      </div>
      <h4 className="card__title">
        {product.title} . <span className="card__price">{product.price} XOF</span>
      </h4>

      <div className="btn-container">
        <Button title={"➕"} type={"add"} onClick={()=> handleIncrement(product.id)} />
        {count !== 0 && (
          <Button title={"➖"} type={"remove"} onClick={()=> handleDecrement(product.id)} />
        )}
      </div>
    </div>
  );
}

export default Card;
