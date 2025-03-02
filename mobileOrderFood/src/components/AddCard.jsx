import React, { useState } from "react";

const carddata = [
  { id: "cardHolder", label: "Card Holder Name", placeholder: "Enter Your Name" },
  { id: "cardNumber", label: "Card Number", placeholder: "Enter Card Number" },
];

function AddCard() {
  const [cardDetails, setCardDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;

    if (id === "cardHolder") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (id === "cardNumber") {
      newValue = value.replace(/\D/g, "").slice(0, 16);
    } else if (id === "expiryDate") {
      newValue = value.replace(/\D/g, "").slice(0, 4);
    } else if (id === "cvv") {
      newValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setCardDetails((prev) => ({ ...prev, [id]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card Details:", cardDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {carddata.map((item) => (
        <div className="flex flex-col gap-1 px-4" key={item.id}>
          <label className="text-[#1A1A1A] font-[Sofia Sans] text-base font-bold leading-6">
            {item.label}
          </label>
          <input
            id={item.id}
            type="text"
            placeholder={item.placeholder}
            value={cardDetails[item.id]}
            onChange={handleChange}
            className="outline-0 p-4 border border-[#1A1A1A] rounded-lg"
          />
        </div>
      ))}

      <div className="flex ">
        <div className="flex flex-col gap-1 px-4">
          <label className="text-[#1A1A1A] font-[Sofia Sans] text-base font-bold leading-6">
            Expiry Date
          </label>
          <input
            id="expiryDate"
            type="text"
            placeholder="MMYY"
            value={cardDetails.expiryDate}
            onChange={handleChange}
            className="outline-0 p-4 border border-[#1A1A1A] rounded-lg w-40"
          />
        </div>
        <div className="flex flex-col gap-1 px-4">
          <label className="text-[#1A1A1A] font-[Sofia Sans] text-base font-bold leading-6">
            CVV
          </label>
          <input
            id="cvv"
            type="text"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleChange}
            className="outline-0 p-4 border border-[#1A1A1A] rounded-lg w-40"
          />
        </div>
      </div>

      <button type="submit" className="bg-[#820F11] text-white p-4 rounded-lg mx-4">
        Add Card
      </button>
    </form>
  );
}

export default AddCard;
