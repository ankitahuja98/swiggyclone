import React from "react";
import locationUnserviceable from "../Images/location_unserviceable.png";

const LocationUnserviceable = () => {
  return (
    <div className="container mt-5 ">
      <div className="flex flex-column justify-center items-center ">
        <div className="UnserviceableImg w-8/12 sm:w-6/12 md:w-4/12 lg:w-3/12">
          <img
            src={locationUnserviceable}
            alt="Location_Unserviceable_IMG"
          ></img>
        </div>
        <div className="flex flex-column justify-center items-center text-justify">
          <p className="font-bold text-lg md:text-xl lg:text-2xl mt-3 mb-1" style={{ color: "#fc8019" }}>
            Location Unserviceable
          </p>
          <p className="font-semibold text-sm md:text-lg lg:text-lg w-11/12 lg:w-full text-center ">
            We don’t have any services here till now.<br /> Try changing location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationUnserviceable;
