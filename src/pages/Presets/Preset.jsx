import React, { useState } from "react";
import TopNav from "../../components/topNav";
import { Navigate } from "react-router-dom";

const Preset = () => {
  const [pin, setPin] = React.useState(["", "", "", "", "", ""]);
  const inputsRef = React.useRef([]);
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (pin.join('') === '123456') {
      setRedirect(true);
    } else {
      setError('Pin is invalid!');
      setError('Pin is invalid!');
      document.body.style.backgroundColor = '#f8d7da';
      setTimeout(() => {
        document.body.style.backgroundColor = '';
      }, 1500);
    }
  }

  // Handle input change
  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (!value) {
      updatePin(idx, "");
      return;
    }
    // If user pastes or types multiple digits, fill accordingly
    const chars = value.split("");
    let newPin = [...pin];
    let nextIdx = idx;
    chars.forEach((char) => {
      if (nextIdx < 6) {
        newPin[nextIdx] = char;
        nextIdx++;
      }
    });
    setPin(newPin);
    // Focus next empty input
    if (nextIdx < 6) {
      inputsRef.current[nextIdx].focus();
    }
  };

  // Handle backspace to move to previous input
  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !pin[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").replace(/\D/g, "");
    if (paste.length === 6) {
      setPin(paste.split(""));
      // Focus last input
      setTimeout(() => {
        inputsRef.current[5].focus();
      }, 0);
      e.preventDefault();
    }
  };

  const updatePin = (idx, val) => {
    const newPin = [...pin];
    newPin[idx] = val;
    setPin(newPin);
  };
    if (redirect) {
      return <Navigate to="/PresetsLayout" replace />;
    }

    return (
      <>
        {/* No redirect here; only redirect after button click and correct PIN */}
        {error && <div className="text-red-600 mb-2">{error}</div>}
        {/* State to trigger redirect after successful verification */}
        <style>
          {`
            input[type=number]::-webkit-inner-spin-button,
            input[type=number]::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type=number] {
              -moz-appearance: textfield;
            }
          `}
        </style>
        <div className="px-64 pb-22">
          <div className="flex justify-between items-center my-5 border-b border-gray-700 py-1">
            <div>
              <p className="text-xl font-bold">Presets</p>
              <p className="text-gray-700"> Your presets form the information</p>
            </div>
            <div>
              <button
                className="bg-red-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-white rounded py-2 px-2 transition-opacity 
            duration-300 ease-in-out hover:opacity-40"
                disabled
              >
                Save changes
              </button>
            </div>
          </div>
  
          <div className="border-1 rounded-xl border-gray-700 px-5 py-5">
            <div className="border-b border-gray-700 py-1">
              <p className="text-lg font-bold">Passcode</p>
              <p className="text-gray-700">Input the PIN to access the presets</p>
            </div>
            <div className="flex gap-2 my-10">
              {/* <form onSubmit= {handleSubmit}> */}
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <input
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={pin[idx]}
                  ref={el => inputsRef.current[idx] = el}
                  onChange={e => handleChange(e, idx)}
                  onKeyDown={e => handleKeyDown(e, idx)}
                  onPaste={handlePaste}
                  placeholder="-"
                  className="border-1 w-15 h-12 text-center rounded-xl border-gray-700"
                  autoComplete="one-time-code"
                />
              ))}
              {/* </form> */}
            </div>
  
            <div>
              <button
                className="bg-red-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-white rounded py-2 px-2 transition-opacity 
                duration-300 ease-in-out hover:opacity-40"
                disabled={pin.some(d => d === "")}
                onClick={handleSubmit}
              >
                Verify PIN
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

export default Preset;
