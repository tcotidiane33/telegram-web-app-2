import React from "react";
import { handleIncrement, handleDecrement , cartItems, onAdd} from "../../db/productSignals";
import "./Card.css";
import Button from "../Button/Button";
import { computed} from "@preact/signals-react";

function Card({ product }) {
  const isSelected = false; 
  const count = computed(()=>{
    const cartItem= cartItems.value.find((prd)=>product.id === prd.id);
    if(cartItem){
      return cartItem.quantity
    }
    return 0
  });
  return (
    <div className={`card ${isSelected ? "card--selected" : ""}`}>
      <span className={`${count.value !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count.value}
      </span>

      <div className="image__container">
        <img src={product.Image} alt={product.title} />
      </div>
      <h4 className="card__title">
        {product.title} . <span className="card__price">{product.price} XOF</span>
      </h4>

      <div className="btn-container">
        <Button title={"➕"} type={"add"} onClick={()=> count.value===0? onAdd(product.id):handleIncrement(product.id)} />
        {count.value !== 0 && (
          <Button title={"➖"} type={"remove"} onClick={()=> handleDecrement(product.id)} />
        )}
      </div>
    </div>
  );
}

export default Card;
