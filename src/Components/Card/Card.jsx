import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ product, onAdd, onRemove, onQuantityChange }) {
  const [count, setCount] = useState(0);
  const isSelected = false; // Vous devrez mettre en œuvre la logique de sélection

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(product.id);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      // Ajoutez une vérification pour éviter l'erreur si product est undefined
      if (product && product.quantity !== undefined) {
        onRemove(product);
      }
    }
  };
  

  return (
    <div className={`card ${isSelected ? "card--selected" : ""}`}>
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
      
      <div className="image__container">
        <img src={product.Image} alt={product.title} /> {/* Use product props */}
      </div>
      <h4 className="card__title">
        {product.title} . <span className="card__price">{product.price} XOF</span> {/* Use product props */}
      </h4>

      <div className="btn-container">
        <Button title={"➕"} type={"add"} onClick={handleIncrement} />
        {count !== 0 && (
          <Button title={"➖"} type={"remove"} onClick={handleDecrement} />
        )}
      </div>
    </div>
  );
}

export default Card;
