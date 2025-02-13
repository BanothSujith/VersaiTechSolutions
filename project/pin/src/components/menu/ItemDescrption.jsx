import { useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function ItemDescription({ item, setSelecteditem, setFilterItems }) {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  
  const handleSelectSize = (id) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(id)
        ? prevSizes.filter((size) => size !== id)
        : [...prevSizes, id]
    );
  };

  const handleSelectAddOn = (id) => {
    setSelectedAddOns((prevAddOns) =>
      prevAddOns.includes(id)
        ? prevAddOns.filter((addOn) => addOn !== id)
        : [...prevAddOns, id]
    );
  };

  const handleAddToCart = (item) => {
    const selectedSizeDetails = item.quantity.filter((quantityItem) =>
      selectedSizes.includes(quantityItem.id)
    );
    const selectedAddOnDetails = item.addOn
      ? item.addOn.filter((addOnItem) => selectedAddOns.includes(addOnItem.id))
      : [];

    console.log(
      item.itemName,
      item.price,
      selectedSizeDetails,
      selectedAddOnDetails
    );
  };

  const handleIncrementQuantity = (quantityId) => {
    setFilterItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        quantity: item.quantity.map((quantityItem) =>
          quantityItem.id === quantityId
            ? { ...quantityItem, quantity: quantityItem.quantity + 1 }
            : quantityItem
        ),
      }))
    );
  };

  const handleDecrementQuantity = (quantityId) => {
    setFilterItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        quantity: item.quantity.map((quantityItem) =>
          quantityItem.id === quantityId && quantityItem.quantity > 1
            ? { ...quantityItem, quantity: quantityItem.quantity - 1 }
            : quantityItem
        ),
      }))
    );
  };

  return (
    <div className="relative w-full h-full  overflow-auto hide-scrollbar max-w-[51.438rem] bg-white p-4 rounded-lg shadow-md flex flex-col justify-start">
      {/* Back Button */}
      <span
        className="absolute bg-[#f6f6f6] w-full h-full max-w-9 max-h-9 z-99999 flex items-center justify-center rounded-3xl active:scale-50 duration-75 top-3"
        onClick={() => setSelecteditem(false)}
      >
        <MdOutlineArrowBackIosNew />
      </span>

      {/* Image Section */}
      <div className="w-full h-64 bg-red-700 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.itemName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Item Details */}
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

      {/* Description */}
      <fieldset className="border rounded-md bg-[#faf8f89e] p-1 w-full border-[#13131347] mt-4 text-sm">
      <legend className="font-semibold text-lg capitalize opacity-50  ml-6 w-max">
      Description
        </legend>
        <p>{item.description}</p>
      </fieldset>

      {/* Quantity Section */}
      <fieldset className="border rounded-md w-full border-[#13131347] mt-4 text-sm">
      <legend className="font-semibold text-lg capitalize opacity-50  ml-6 w-max">
          Quantity
        </legend>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                {["Select", "Size", "Price", "Quantity"].map(
                  (header, index) => (
                    <th key={index} className="px-4 py-1 text-left">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {item.quantity.map((quantityItem) => (
                <tr
                  key={quantityItem.id}
                  className={`hover:bg-gray-100 ${
                    selectedSizes.includes(quantityItem.id) ? "bg-blue-100" : ""
                  }`}
                >
                  <td className="px-4 py-2 border-y"  onClick={() =>{ handleSelectSize(quantityItem.id);selectedSizes.includes(quantityItem.id)}}
                  >
                    <input
                      type="checkbox"
                      name={`size-${item.id}`}
                      checked={selectedSizes.includes(quantityItem.id)}
                      onChange={() => handleSelectSize(quantityItem.id)}
                    />
                  </td>
                  <td className="px-4 py-2 border-y"  onClick={() =>{ handleSelectSize(quantityItem.id);selectedSizes.includes(quantityItem.id)}}>{quantityItem.size}</td>
                  <td className="px-4 py-2 border-y"  onClick={() =>{ handleSelectSize(quantityItem.id);selectedSizes.includes(quantityItem.id)}}>
                    <div className="flex items-center">
                      <MdOutlineCurrencyRupee className="text-sm" />
                      {quantityItem.price}
                    </div>
                  </td>
                  {selectedSizes.includes(quantityItem.id) ? (
                    <td className="px-4 py-2 border-y">
                      <span className="flex gap-1 items-center text-center">
                        <CiCirclePlus
                          onClick={() =>
                            handleIncrementQuantity(quantityItem.id)
                          }
                        />
                        <span>{quantityItem.quantity}</span>
                        <CiCircleMinus
                          onClick={() =>
                            handleDecrementQuantity(quantityItem.id)
                          }
                        />
                      </span>
                    </td>
                  ) : (
                    <td className="px-4 py-2 border-y"  onClick={() =>{ handleSelectSize(quantityItem.id);selectedSizes.includes(quantityItem.id)}}>
                      <span>{quantityItem.quantity}</span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </fieldset>

      {/* Add-On Section */}
      {item.addOn ? (
        <fieldset className="border rounded-md w-full border-[#13131347] mt-4 text-sm">
      <legend className="font-semibold text-lg capitalize opacity-50  ml-6 w-max">
      Add-On's
          </legend>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-200">
                  {["Select", "Item", "Price"].map((header, index) => (
                    <th key={index} className="px-4 py-1 text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.addOn.map((addOnItem) => (
                  <tr
                    key={addOnItem.id}
                    className={`hover:bg-gray-100 ${
                      selectedAddOns.includes(addOnItem.id) ? "bg-blue-100" : ""
                    }`}
                  >
                    <td className="px-4 py-2 border-y" onClick={() =>{ handleSelectAddOn(addOnItem.id);selectedAddOns.includes(addOnItem.id)}}
                    >
                      <input
                        type="checkbox"
                        name={`addOn-${item.id}`}
                        checked={selectedAddOns.includes(addOnItem.id)}
                        onChange={() => handleSelectAddOn(addOnItem.id)}
                      />
                    </td>
                    <td className="px-4 py-2 border-y" onClick={() =>{ handleSelectAddOn(addOnItem.id);selectedAddOns.includes(addOnItem.id)}}>{addOnItem.name}</td>
                    <td className="px-4 py-2 border-y" onClick={() =>{ handleSelectAddOn(addOnItem.id);selectedAddOns.includes(addOnItem.id)}}>
                      <div className="flex items-center">
                        <MdOutlineCurrencyRupee className="text-sm" />
                        {addOnItem.price}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </fieldset>
      ) : (
        <div className="text-sm text-[#bb8888] mt-4">
          No add-ons available for this item.
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-around mt-4 h-full w-full max-h-10">
        <button
          className="bg-transparent border border-red-700 text-red-700 hover:bg-[#d06a6a] hover:text-white w-full max-w-28 rounded-md active:scale-[.9] duration-100"
          onClick={() => {
            setSelectedSizes([]);
            setSelectedAddOns([]);
          }}
        >
          CANCEL
        </button>
        <button
          className="bg-red-700 text-white hover:bg-[#d06a6a] w-full max-w-28 rounded-md active:scale-[.9] duration-100"
          onClick={() => handleAddToCart(item)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ItemDescription;
