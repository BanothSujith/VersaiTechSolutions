{cardData.length !== 0 && status === "" ? (
  <div className="bg-[#FAFAFA] border rounded-t-[.875rem] border-[#a9a9a9] border-dashed  flex flex-col justify-between items w-full h-full max-h-[12.875rem] max-w-[24.625rem] p-5 ">
    <div className=" flex flex-col justify-between w-full h-full  ">
      <div className="flex justify-between font-bold text-[1.875rem] ">
        <span>TOTAL</span>
        <span>${totalPrice}</span>
      </div>

      <div className="flex justify-between ml-4">
        <button
          className="border-[0.094rem] rounded-md text-[#ec5a5a] border-[#ec5a5a] px-4 py-2 hover:bg-[#ec5a5a] hover:text-white transition duration-500"
          onClick={() => setRejected(true)}
        >
          DECLINE ORDER
        </button>
        <button
          className="border-[0.094rem] rounded-md text-[#f1f2f2] bg-[#1b2827] px-4 py-2 hover:bg-[#28a745] hover:text-white transition duration-500 "
          onClick={() => setStatus("accepted")}
        >
          ACCEPT ORDER
        </button>
      </div>
    </div>
  </div>
) : (
  ""
)}
{/* accepted Status */}
{status === "accepted" ? (
  <div className="bg-[#FAFAFA] border rounded-t-[.875rem] border-[#a9a9a9] border-dashed  flex flex-col justify-between items-center w-full h-full max-h-[19.5rem] max-w-[24.625rem] p-5 ">
    <p className="uppercase text-[#2B82F5] ">
      verify 4-digit security pin
    </p>

    <div className="flex space-x-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index}>
          <input
            type="text"
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleInputChange(e, index)}
            className="w-12 h-12 text-center bg-[#efefef] shadow-[#feda59] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a680d]"
          />
        </div>
      ))}
    </div>

    <div className=" flex flex-col justify-between w-full h-full max-h-[7.875rem] max-w-[22.438rem] ">
      <div className="flex justify-between font-bold text-[1.875rem] ">
        <span>TOTAL</span>
        <span>${totalPrice}</span>
      </div>
      <div className="flex justify-between ml-4">
        <button
          className="border-[0.094rem] rounded-md text-[#ec5a5a] border-[#ec5a5a] px-4 py-2 hover:bg-[#ec5a5a] hover:text-white transition duration-500"
          onClick={() => {
            setCardData([]);
            setStatus("");
          }}
        >
          DECLINE ORDER
        </button>
        <button
          className="border-[0.094rem] rounded-md text-[#f1f2f2] bg-[#1b2827] px-4 py-2 transition duration-500 cursor-not-allowed	 "
          disabled
        >
          ACCEPT ORDER
        </button>
      </div>
    </div>
  </div>
) : (
  ""
)}

{/* verified Status */}

{cardData.length !== 0 && status === "verified" ? (
  <div className="bg-[#FAFAFA] border rounded-t-[.875rem] border-[#a9a9a9] border-dashed  flex flex-col justify-around items-center w-full h-full max-h-[19.5rem] max-w-[24.625rem] ">
    <div className="flex flex-col w-full h-full justify-between max-h-[5.75rem] pb-[2rem] border-b-2 border-dotted border-[#a9a9a9] font-semibold text-[.938rem] uppercase ">
      <div className="px-5">
        <span className="flex justify-between">
          <span>subtotal</span>
          <span>${(totalPrice - totalPrice * 0.1).toFixed(2)}</span>
        </span>
      </div>
      <div className="px-5">
        <span className="flex justify-between">
          <span>
            <span className="pr-2">service charge</span>
            <span>10%</span>{" "}
          </span>
          <span>${(totalPrice * 0.1).toFixed(2)}</span>
        </span>
      </div>
    </div>

    <div className=" flex flex-col justify-between w-full h-full max-h-[7.875rem] max-w-[22.438rem] ">
      <div className="flex justify-between font-bold text-[1.875rem] ">
        <span>TOTAL</span>
        <span>${totalPrice}</span>
      </div>
      <div className="flex flex-row-reverse justify-between ml-4">
        <button className="border-[0.094rem] rounded-md text-black bg-[#5aec90] hover:bg-[#488a60] border-[#ecbe5a] px-4 py-2  hover:text-black transition duration-500">
          GENERATE BILL
        </button>
        <button
          className="border-[0.094rem] rounded-md text-black border-[#ec5a5a] bg-[#b1ced4] px-4 py-2 hover:bg-[#bdccc1]  transition duration-500 "
          onClick={() => {
            setIsEditing(!isEditing);
            setStatus("editing");
          }}
        >
          EDIT ORDER
        </button>
      </div>
    </div>
  </div>
) : (
  ""
)}
{/* edit state */}
{cardData.length !== 0 && status === "editing" ? (
  <div className="bg-[#FAFAFA] border rounded-t-[.875rem] border-[#a9a9a9] border-dashed  flex flex-col justify-around items-center w-full h-full max-h-[19.5rem] max-w-[24.625rem] ">
    <div className="flex flex-col w-full h-full justify-between max-h-[5.75rem] pb-[2rem] border-b-2 border-dotted border-[#a9a9a9] font-semibold text-[.938rem] uppercase ">
      <div className="px-5">
        <span className="flex justify-between">
          <span>subtotal</span>
          <span>${totalPrice - totalPrice * 0.1}</span>
        </span>
      </div>
      <div className="px-5">
        <span className="flex justify-between">
          <span>
            <span className="pr-2">service charge</span>
            <span>10%</span>{" "}
          </span>
          <span>${totalPrice * 0.1}</span>
        </span>
      </div>
    </div>

    <div className=" flex flex-col justify-between w-full h-full max-h-[7.875rem] max-w-[22.438rem] ">
      <div className="flex justify-between font-bold text-[1.875rem] ">
        <span>TOTAL</span>
        <span>${totalPrice}</span>
      </div>
      <div className="flex justify-between ml-4">
        <button
          className="border-[0.094rem] rounded-md text-[#ec5a5a] border-[#ec5a5a] px-4 py-2 hover:bg-[#ec5a5a] hover:text-white transition duration-500"
          onClick={() => {
            setCardData(itemsList);
            setStatus("verified");
            setIsEditing(false);
          }}
        >
          CANCEL
        </button>
        <button
          className="border-[0.094rem] rounded-md text-[#f1f2f2] bg-[#1b2827] px-4 py-2 hover:bg-[#28a745] hover:text-white transition duration-500 "
          onClick={() => {
            setIsEditing(false);
            setStatus("verified");
            setItemsList(cardData);
          }}
        >
          CONFIRM CHANGES
        </button>
      </div>
    </div>
  </div>
) : (
  ""
)}