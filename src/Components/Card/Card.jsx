import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ product, onAdd, onRemove, selectedProducts, onDisplayProduct, onDisplayTotalPrice, isOrderComponent }) {
  const [count, setCount] = useState(0);
  const { title, Image, price, id } = product;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(product.id);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(product);
  };
  
// ...
const isSelected = selectedProducts && selectedProducts.some((p) => p.id === product.id);
// ...

  return (
    <div className={`card ${isSelected ? "card--selected" : ""}`}>
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">{price} XOF</span>
      </h4>

      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
