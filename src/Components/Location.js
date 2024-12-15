import React, { useEffect, useState } from "react";
import LatLong from "../utils/LatLong";
import { useDispatch, useSelector } from "react-redux";
import "../Components/CSS/Location.css";
import {
  lat,
  long,
  LatLongDisplayName,
  latlongInputStore,
} from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Location = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const getlatlongInputStore = useSelector((store) => {
    return store.cart.latlongInputStore;
  });

  const [latlongInput, setlatlongInput] = useState(getlatlongInputStore);
  const [latlongFinalInput, setlatlongFinalInput] = useState("");

  const [displaylatlong, setdisplaylatlong] = useState("none");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setlatlongFinalInput(latlongInput);
    }, 500);
    return () => clearTimeout(timeout);
  }, [latlongInput]);

  const getLatLongDisplayName = useSelector((store) => {
    return store.cart.LatLongDisplayName;
  });

  const getLat = useSelector((store) => {
    return Number(store.cart.lat);
  });

  const getLong = useSelector((store) => {
    return Number(store.cart.long);
  });

  let latlongresult = LatLong(latlongFinalInput);
  let latitutde = getLat;
  let longitutde = getLong;
  let LocationName = getLatLongDisplayName;

  latlongresult?.forEach((val) => {
    if (val.display_name === latlongInput) {
      latitutde = val.lat;
      longitutde = val.lon;
      LocationName = val.display_name;
    }
  });

  useEffect(() => {
    dispatch(lat(latitutde));
    dispatch(long(longitutde));
    dispatch(LatLongDisplayName(LocationName));
  }, [latlongInput]);

  // console.log("latlongresult", latlongresult);

  return (
    <>
      <div
        className="NavbarSeprationcolor sticky top-16 "
        style={{ height: "2rem" }}
      ></div>
      <div className="LatLong mx-3 flex flex-col justify-center items-center mt-4">
        <div className="w-11/12 lg:w-8/12 flex flex-col">
          <label className="font-bold text-lg lg:text-xl mb-2 pl-">
            Enter your city or area name
          </label>

          <div className="border-1 border-black rounded-lg flex justify-between">
            <span
              className="position-relative left-3 mr-3 cursor-pointer flex items-center justify-center"
              onClick={() => {
                setdisplaylatlong("block");
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className="p-1.5 rounded-lg outline-none pl-3 pr-9 w-full"
              type="text"
              value={latlongInput}
              onChange={(e) => setlatlongInput(e.target.value)}
              onClick={() => setdisplaylatlong("block")}
              placeholder="Try Delhi, Mumbai etc."
              //   style={{ width: "93%" }}
            />

            <span className="mr-3 flex items-center justify-center">
              <i
                className="fa-solid fa-x cursor-pointer"
                onClick={() => setlatlongInput("")}
              ></i>
            </span>
          </div>
        </div>

        {latlongresult?.length !== 0 ? (
          <div
            className="border-2 overflow-auto p-2 mt-3 w-11/12 lg:w-8/12"
            style={{
              display: displaylatlong,
              maxHeight: "30rem",
              backgroundColor: "white",
            }}
          >
            {latlongresult?.map((val, ind) => {
              const { display_name } = val;
              return (
                <div
                  key={ind}
                  className="latlonglist cursor-pointer text-nowrap p-1"
                  onClick={() => {
                    dispatch(latlongInputStore(display_name));
                    setlatlongInput(display_name);
                    setdisplaylatlong("none");
                    setTimeout(() => {
                      navigate("/");
                    }, 10);
                  }}
                >
                  {display_name}
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Location;
