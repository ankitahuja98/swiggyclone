import React from "react";
import { Rest_img_url } from "../utils/constant";

const RestCard = (props) => {
  const { Api_data } = props;

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    areaName,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    veg,
  } = Api_data.info;

  const color = {
    primary: "black",
    secondary: "#64686b",
  };

  return (
    <div className="card_">
      <div className="card_img">
        <img
          className="CardImg rounded-2xl w-80 sm:w-56"
          src={Rest_img_url + cloudinaryImageId}
          alt="food"
        />
      </div>
      {}
      <div className="imageSeprationColor relative bottom-10 rounded-b-2xl"></div>

      <div
        className={` card_detail flex flex-col justify-start pl-1.5 relative ${
          aggregatedDiscountInfoV3 ? "card_details2" : null
        }`}
      >
        <p
          className="mb-1 font-black flex justify-start z-10"
          style={{ color: "white", fontSize: "1.05rem" }}
        >
          {aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3.header : null}{" "}
          {aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3.subHeader : null}
        </p>

        <p className="RestInfoName mb-0 mt-1 text-left font-semibold text-2xl sm:text-xl  overflow-hidden text-ellipsis inline-block text-nowrap w-11/12 ">
          {name}
        </p>

        <div className="mb-0 flex justify-between">
          <div className="flex">
            <i
              className="fa-solid fa-star restRating "
              style={{ color: "#0a9400" }}
            ></i>
            <span className="pl-1 font-semibold text-base">{avgRating}</span>
            <span className="pl-1 font-semibold text-base">
              ({totalRatingsString})
            </span>
          </div>

          {veg ? (
            <div className="flex w-22 mt-1 mr-1">
              <i className="fa-solid fa-leaf" style={{ color: "#2d8000" }}>
                {" "}
                <span className="text-xs font-serif">Pure Veg</span>
              </i>
            </div>
          ) : null}
        </div>

        <p
          className="mb-0 text-left overflow-hidden text-ellipsis inline-block text-nowrap w-11/12"
          style={{ color: color.secondary }}
        >
          {cuisines.join(", ")}
        </p>

        <p className="mb-0 flex" style={{ color: color.secondary }}>
          {areaName}
        </p>
      </div>
    </div>
  );
};

export default RestCard;
