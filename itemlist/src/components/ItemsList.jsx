import React, { useState } from "react";
import "./itemsList.css";
import ItemCard from "../card/ItemCard";
import ButtonsWithOtp from "./Otp";
import { BiFontFamily } from "react-icons/bi";

function ItemsList({ itemsList }) {
  const [editMode, setEditMode] = useState(false);
  const [isGeneratingBill, setIsGeneratingBill] = useState(false);
  const [isReject, setIsRejected] = useState(false);
  const [products, setProducts] = useState([
    {
      name: "Bluetooth Headphones",
      price: 75.49,
      img: "/img/image.png",
      quantity: 8,
    },
    {
      name: "Webcam",
      price: 40.0,
      img: "/img/image.png",
      quantity: 5,
    },
    {
      name: "Webcam",
      price: 40.0,
      img: "/img/image.png",
      quantity: 5,
    }
    
  ]);

  const calculateTotalPrice = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const totalPrice = calculateTotalPrice(products);

  const updateQuantity = (index, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, quantity: newQuantity } : product
      )
    );
  };
  const handleReject = (isrejected) =>{ 
    setIsRejected(isrejected);
    if (isrejected) {
      setProducts([]);
  }
  }
  const handleEditModeToggle = (isEditing) => {
    setEditMode(isEditing);
  };
const handleGenerationgBill = (generateBill)=>{
  setIsGeneratingBill(generateBill)
}
  return (
    <div className="items-list">
      <div className="items-header" >
        <div className="orderid">
          <span className="order">
            <strong>Order#</strong>
          </span>
          <span className="orderID">
            <strong>{itemsList.id}</strong>
          </span>
        </div>
        <div className="guess-table">
          <span>Guess: {itemsList.no}</span>
          <span>Table: {itemsList.tableno}</span>
        </div>
      </div>
      <div className="items-layout">
{ !isGeneratingBill? ( products.length === 0 ? (
          <div className="no-items">
            <img src="/img/placeholder.png" style={{width:'10em', height:'10em', aspectRatio:'4/4'}} alt="No items" />
          </div>
        ) : (
          products.map((product, index) => (
            <div key={index} className="items">
              <ItemCard
                selectedItems={product}
                editMode={editMode}
                onQuantityChange={(newQuantity) =>
                  updateQuantity(index, newQuantity)
                }
              />
            </div>
          ))
        )):(
        <div>
           {products.map((item, index) => (
            <div className="bill" key={index}>
              <p >
              <span>{item.name}</span>
              <span >{item.price}</span> 
              <span>{item.quantity}</span></p>
            </div>
          ))}
          <p className="totalBill"><span>Total:</span><strong>{totalPrice}</strong> </p>
          </div>
        )
}
    </div>
      {!isGeneratingBill && products.length !== 0 && (
        <div className="items-footer">
          <ButtonsWithOtp
            total={totalPrice}  reject={handleReject}
            onEditModeToggle={handleEditModeToggle}
            itemsList={products} generateBill={handleGenerationgBill}
          />
        </div>
      )}
    </div>
  );
}

export default ItemsList;
