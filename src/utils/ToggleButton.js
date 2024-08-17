import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ getisVeg, getisNonVeg }) => {
  const [isVeg, setisVeg] = useState(false);

  const [isNonVeg, setisNonVeg] = useState(false);

  const [VegInput, setVegInput] = useState("");

  const [NonVegInput, setNonVegInput] = useState("");

  getisVeg(isVeg);
  getisNonVeg(isNonVeg);

  const VegHandler = () => {
    setisVeg(!isVeg);
    setVegInput(!VegInput);
    setNonVegInput("");
    setisNonVeg(false);
  };

  const NonVegHandler = () => {
    setisNonVeg(!isNonVeg);
    setNonVegInput(!NonVegInput);
    setVegInput("");
    setisVeg(false);
  };

  return (
    <div className="flex items-center">
      <label className="switch">
        <input type="checkbox" checked={VegInput} onChange={VegHandler} />
        <span className="slider veg" />
      </label>
      <span className="fontt font-bold text-xs sm:txt-sm md:text-lg lg:text-xl mb-0.5  ml-1  mr-2 md:mr-5 lg:mr-10">
        Veg
      </span>

      <label className="switch">
        <input type="checkbox" checked={NonVegInput} onChange={NonVegHandler} />
        <span className="slider nonveg" />
      </label>
      <span className="fontt font-bold text-xs sm:txt-sm md:text-lg lg:text-xl mb-0.5 ml-1">
        Non-Veg
      </span>
    </div>
  );
};

export default ToggleButton;
