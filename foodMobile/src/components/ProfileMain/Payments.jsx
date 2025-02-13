import React from "react";
import { SiMastercard } from "react-icons/si";
import { MdAddCard } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Payments() {
  return (
    <div className="h-full  flex flex-col gap-4 md:gap-6">
      <p className="uppercase text-xl font-mediu text-[#00000066] tracking-normal">
        SAVED PAYMENT METHODS
      </p>
      <div className="flex flex-col gap-6 pb-2 ">
        {/* //saved cards modify accordingly */}
        <div className="flex gap-4 items-center">
          <SiMastercard />
          <div>MASTERCARD X-XXXX</div>
        </div>
        <div className="flex gap-4 items-center">
          <MdAddCard />
          <div>Add new card</div>
        </div>
      </div>

      <div className=" bg-[#FFF] inset-shadow-2xs shadow-2xs shadow-[#00000020] rounded-3xl shrink-0 ">
        <div className="flex  w-full justify-between text-[.75rem] md:text-lg font-medium px-3 md:px-5 py-2  ">
          Pay with Mastercard and Visa
          <div className="flex ">
            <img
              src="https://t3.ftcdn.net/jpg/08/54/95/56/240_F_854955657_lG8dnsEaKhoSGFH8CrSu3HLXn1qT0gvp.jpg"
              className="w-5 h-4 md:w-8 md:h-6 object-center "
            />
            <img
              src="https://t3.ftcdn.net/jpg/03/33/21/62/240_F_333216210_HjHUw1jjcYdGr3rRtYm3W1DIXAElEFJL.jpg"
              className="w-5 h-4 md:w-8 md:h-6 object-center "
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 py-4 px-6 md:px-12">
          <div>
            <input
              type="text"
              placeholder="Card Name"
              className="outline-none w-full p-2 border-b boreder-b-[#a6a6a6] placeholder:text-sm md:placeholder:text-lg "
            />
          </div>
          <div className=" ">
            <input
              type="text"
              placeholder="Card Number"
              className="outline-none w-full p-2 border-b boreder-b-[#a6a6a6] placeholder:text-sm md:placeholder:text-lg"
            />
          </div>
          <div>
            <p className="text-[#00000059] text-sm md:text-lg">Expire Date</p>
            <div className="flex gap-6">
              <input
                type="number"
                min={1}
                max={2}
                placeholder="MM"
                className="outline-none w-10 md:w-16 border-b boreder-b-[#a6a6a6] placeholder:text-sm md:placeholder:text-lg "
                onInput={(e) => {
                  if (e.target.value.length > 2) {
                    e.target.value = e.target.value.slice(0, 2);
                  }
                }}
              />
              <div className="flex items-end">
                <input
                  type="number"
                  min={4}
                  placeholder="YYYY"
                  onInput={(e) => {
                    if (e.target.value.length > 4) {
                      e.target.value = e.target.value.slice(0, 4);
                    }
                  }}
                  className="outline-none w-16 md:w-18 border-b boreder-b-[#a6a6a6] placeholder:text-sm md:placeholder:text-lg "
                />
                <BsQuestionCircle className="text-[#00000059] font-bold " />
              </div>
              <div className=" flex items-end">
                <input
                  type="text"
                  min={3}
                  placeholder="CVV"
                  onInput={(e) => {
                    if (e.target.value.length > 3) {
                      e.target.value = e.target.value.slice(0, 3);
                    }
                  }}
                  className="outline-none w-12 md:w-18 border-b boreder-b-[#a6a6a6] placeholder:text-sm md:placeholder:text-lg "
                />
                <BsQuestionCircle className="text-[#00000059] font-bold " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#00000035] text-[.7rem] md:text-lg bg-[#D9D9D959] p-6 flex gap-4">
        <span>
          <IoMdInformationCircleOutline className="text-2xl md:text-4xl font-semibold" />
        </span>
        To activate your 1-Click Payment, we need to verify your payment method
        by issuing temporary authorization hold of NGN 100 on it. It will not be
        collected. Yiu can manage your 1-Click Payment in the account settings
        during checkout. Your payment information is safe with us and will not
        be shared with the merchant - LOBACE FOOD DELIVERY.
      </p>
      <button className="w-full mx-auto max-w-84 py-4 md:py-6 px-2.5 bg-[#820F11] rounded-xl text-white font-bold">
        AGREE AND CONTINUE
      </button>

      <p className="text-center text-[.7rem] md:text-sm flex flex-col ">
        By tapping “AGREE AND CONTINUE” I accept the
        <span className="text-[#820F11]">
          Payment Terms & Conditions, General Terms and Conditions,
        </span>
        <span>
          <span>and </span>
          <span className="text-[#820F11]">
            Privacy and Cookies Notice
          </span>
        </span>
      </p>

      <p className="text-center text-[.7rem] md:text-sm">
        Please Note: We will never ask you for your password, PIN, CVV or full
        card details over the phone or via email. Need help? Contact us on{" "}
        <span className="text-[#820F11]">+234 816 6280 796</span>
      </p>
    </div>
  );
}

export default Payments;
