import { useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function ItemDescription({ item, setSelecteditem }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedAddOn, setSelectedAddOn] = useState(null);

  const handleSelectSize = (id) => {
    setSelectedSize(id === selectedSize ? null : id);
  };

  const handleSelectAddOn = (id) => {
    setSelectedAddOn(id === selectedAddOn ? null : id);
  };

  return (
    <div className="relative w-full h-screen max-h-auto overflow-auto hide-scrollbar max-w-[38rem] bg-white p-4 rounded-lg shadow-md flex flex-col justify-evenly">
      <span
        className="absolute bg-[#f6f6f6] w-full h-full max-w-9 max-h-9 z-99999 flex items-center justify-center rounded-3xl active:scale-50  duration-75 top-3 "
        onClick={() => setSelecteditem(false)}
      >
        <MdOutlineArrowBackIosNew />
      </span>
      <div className="w-full h-64 bg-red-700 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.itemName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center mt-4 font-semibold text-xl">
        <div>
          <p>{item.itemName}</p>
          <p className="text-sm text-gray-500">{item.rattings} ★</p>
        </div>
        <div className="flex items-center">
          <MdOutlineCurrencyRupee className="text-lg" />
          {item.price}
        </div>
      </div>

      <fieldset className="border rounded-md bg-[#faf8f89e] p-1 w-full border-[#13131347] mt-4 text-sm">
        <legend className="font-semibold text-lg capitalize opacity-50 p-0 m-0">description</legend>
        <p>{item.description}</p>
      </fieldset>

      <fieldset className="border rounded-md   w-full border-[#13131347] mt-4 text-sm">
        <legend className="font-semibold text-lg capitalize  leading-none opacity-50">Quantity</legend>

        <Table
          title="Size"
          headers={["Select", "Size", "Price", "Quantity"]}
          data={item.quantity}
          selectedId={selectedSize}
          onRowClick={handleSelectSize}
          renderRow={(quantityItem) => [
            <input
              type="radio"
              name={`size-${item.id}`}
              checked={selectedSize === quantityItem.id}
              onChange={() => handleSelectSize(quantityItem.id)}
            />,
            quantityItem.size,
            <div className="flex items-center">
              <MdOutlineCurrencyRupee className="text-sm" />
              {quantityItem.price}
            </div>,
            quantityItem.quantity,
          ]}
        />
      </fieldset>

     
      {item.addOn ? (
         <fieldset className="border rounded-md   w-full border-[#13131347] mt-4 text-sm">
         <legend className="font-semibold text-lg capitalize  leading-none opacity-50">Quantity</legend>
 
        <Table
          title="Add-On"
          headers={["Select", "Item", "Price"]}
          data={item.addOn}
          selectedId={selectedAddOn}
          onRowClick={handleSelectAddOn}
          renderRow={(addOnItem) => [
            <input
              type="radio"
              name={`addOn-${item.id}`}
              checked={selectedAddOn === addOnItem.id}
              onChange={() => handleSelectAddOn(addOnItem.id)}
            />,
            addOnItem.name,
            <div className="flex items-center">
              <MdOutlineCurrencyRupee className="text-sm" />
              {addOnItem.price}
            </div>,
          ]}
        />
        </fieldset>
      ) : (
        <div className="text-sm text-[#bb8888] mt-4">
          No add-ons available for this item.
        </div>
      )}
       

      <div className="flex justify-around mt-4 h-full w-full max-h-10">
      <button className="bg-transparent border border-red-700 text-red-700 hover:bg-[#d06a6a] hover:text-white w-full max-w-28 rounded-md active:scale-[.9] duration-100">
          CANCEL
        </button>
        <button className="bg-[#1B2827] border border-gradient-to-r from-[red] to-[green] text-white w-full max-w-28 rounded-md active:scale-[.9] duration-100">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

function Table({  headers, data, selectedId, onRowClick, renderRow }) {
  return (
    <div className="w-full   overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-1 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={`hover:bg-gray-100 ${
                selectedId === item.id ? "bg-blue-100" : ""
              }`}
              onClick={() => onRowClick(item.id)}
            >
              {renderRow(item).map((cell, index) => (
                <td key={index} className="px-4 py-2 border-y">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemDescription;
