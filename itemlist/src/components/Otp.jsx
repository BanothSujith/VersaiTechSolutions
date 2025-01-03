import React, { useState, useRef } from "react";
import "./Otp.css";

function ButtonsWithOtp({ total,reject, onEditModeToggle,itemsList,generateBill}) {
  const [step, setStep] = useState("initial");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpVerified, setOtpVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = useRef([]);

  const handleAccept = () => {
    setStep("otpInput");
  };

  const handleDecline = () => {
   reject(true); 
  }

  const handleInputChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      handleOtpVerification(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpVerification = (enteredOtp) => {
    if (enteredOtp === "1234") {
      setOtpVerified(true);
      setStep("generateEdit");
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
      setOtp(["", "", "", ""]);
      inputRefs.current[0].focus();
    }
  };

  const handleGenerate = () => {
    setStep('generateBill');
    generateBill((prev)=>!prev);
  };

  
  const handleEdit = () => {
    onEditModeToggle((prev)=> !prev); 
    setStep('save');
};        

  const handleSave = ()=>{
    onEditModeToggle((prev)=> !prev); 
    setStep('generateEdit');
  } 

  return (
    <div className="buttonsState">
      {step === "initial" && (
        <div className="ButtonsFun">
          <p className="total">
            <span><b>Total:</b></span>
            <span><b>${total || 0}</b></span>
          </p>
          <div className="ButtonsFun-btn">
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
          </div>
        </div>
      )}

      {step === "otpInput" && (
        <div className="otpInput">
          <p>Verify 4-digit Security PIN</p>
          <div className="otp-box-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="otp-box"
                autoFocus={index === 0}
              />
            ))}
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="ButtonsFun-btn">
            <button onClick={handleAccept} disabled>Accept</button>
            <button onClick={handleDecline} >Decline</button>
          </div>
        </div>
      )}

      {step === "generateEdit" && isOtpVerified && (
        <div className="ButtonsFun">
          <p className="total">
            <span><b>Total:</b></span>
            <span><b>${total || 0}</b></span>
          </p>
          <div className="ButtonsFun-btn">
            <button onClick={handleGenerate}>Generate Bill</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
       {step === "save"  && (
        <div className="ButtonsFun">
          <p className="total">
            <span><b>Total:</b></span>
            <span><b>${total || 0}</b></span>
          </p>
          <div className="ButtonsFun-btn">
            <button onClick={handleGenerate}>Generate Bill</button>
            <button onClick={handleSave}>SAVE</button>
          </div>
        </div>
      )}
       
    </div>
  );
}

export default ButtonsWithOtp;
