import React, { useState } from "react";
import "./BestsellerBtn.css";

const BestsellerBtn = ({getisBestseller}) => {
  const [btnColor, setbtnColor] = useState({
    color: "#f97203",
    bcgColor: "white",
    boxShadow: "",
  });

  const [isBestseller, setisBestseller] = useState(false);

  const HandleChange = () => {
    setisBestseller(!isBestseller);
    if (btnColor.bcgColor === "white") {
      setbtnColor({
        color: "white",
        bcgColor: "#f97203",
        boxShadow: "0px 0px 7px #f97203",
      });
    } else {
      setbtnColor({
        color: "#f97203",
        bcgColor: "white",
        boxShadow: "",
      });
    }
  };

  getisBestseller(isBestseller)

  return (
    <div>
      <button
        className="bestseller ml-3 lg:ml-5 text-xs md:text-lg lg:text-xl"
        style={{
          color: btnColor.color,
          backgroundColor: btnColor.bcgColor,
          boxShadow: btnColor.boxShadow,
        }}
        onClick={HandleChange}
      >
        Bestseller
        {btnColor.color === "white" ? (
          <span className=" ml-2 mt-1 ">
            <i className="cross fa-solid fa-xmark"></i>
          </span>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default BestsellerBtn;
