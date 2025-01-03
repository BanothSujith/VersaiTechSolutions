import React, { useState } from "react";
import "./itemCard.css";

function ItemCard({ selectedItems, editMode, onQuantityChange }) {
  const [quantity, setQuantity] = useState(selectedItems.quantity);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    } 
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={selectedItems.img} alt={selectedItems.name} />
      </div>
      <div className="card-details">
        <span className="item-name">{selectedItems.name}</span>
        <span className="item-price">
          <strong>${selectedItems.price}</strong>
        </span>
      </div>
      <div className="card-quantity">
        <span>Quantity:</span>
        {editMode ? (
          <div className="editBtn"> 
            <button onClick={handleIncrease}>+</button>
            <span>{quantity}</span>
            <button onClick={handleDecrease}>-</button>
          </div>
        ) : (
          <strong>{quantity}</strong>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
