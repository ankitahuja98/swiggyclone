import React from "react";
import NoWifi from "../Images/NoWifi.png";
import { useNavigate } from "react-router-dom";

const OfflinePage = () => {
  const navigate = useNavigate();
  const GetHomePage = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center flex-column">
      <img className="w-96" src={NoWifi} alt="No_Internet" />
      <p className="font-bold mb-1 text-3xl mt-2" style={{ color: "#fc8019" }}>
        Whoops!
      </p>
      <p className="font-bold text-xl text-center">
        No Internet Connection. <br />
        Please Check your Internet Connection.
      </p>
      <button
        className="m-1 p-2 bg-orange-500 text-white font-bold"
        onClick={GetHomePage}
      >
        Try Again
      </button>
    </div>
  );
};

export default OfflinePage;
