import React from "react";
import DeliveryBoy from "../Images/DeliveryBoy.png";
import Time from "../Images/Time.png";
import { useNavigate } from "react-router-dom";

const OrderPlace = () => {
  const color = {
    primary: "black",
    secondary: "#928f9e",
  };

  const navigate = useNavigate();
  const GetHomePage = () => {
    navigate("/");
  };

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <div className="flex justify-center" style={{ backgroundColor: "#E9ECEE" }}>
      <div
        className="w-full sm:10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mt-3 h-full pb-2 mb-3 flex flex-col items-center"
        style={{ backgroundColor: "white" }}
      >
        <p className="text-3xl font-bold mt-5 mb-0">Order Confirmed</p>
        <p className="" style={{ color: color.secondary }}>
          Thank you for choosing us
        </p>
        <img className="w-60" src={DeliveryBoy} alt="Order Placed" />
        <p className="mb-0 font-semibold" style={{ color: color.primary }}>
          Your order will arrive in
        </p>
        <p className="flex font-semibold" style={{ color: color.primary }}>
          <img className="w-5 mx-1" src={Time} alt="time" /> 35 Mins
        </p>

        <button
          className="m-1 p-2 bg-orange-500 text-white font-bold"
          onClick={GetHomePage}
        >
          See Restaurant Near You
        </button>
      </div>
    </div>
  );
};

export default OrderPlace;
