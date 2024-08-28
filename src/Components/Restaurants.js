import React, { useState, useEffect } from "react";
import "./CSS/MainRest.css";
import RestCard from "./RestCard";
import { Link } from "react-router-dom";
import ShimmerCardTopRest from "./ShimmerUI/ShimmerCardTopRest";
import ShimmerCardMainRest from "./ShimmerUI/ShimmerCardMainRest";
import { useDispatch, useSelector } from "react-redux";
import { addRestName } from "../utils/cartSlice";
import Width from "../utils/Width";
import CounterVal from "../utils/CounterVal";
import LocationUnserviceable from "../utils/LocationUnserviceable";

const Restaurants = () => {
  const dispatch = useDispatch();
  let width = Width();
  let countVal = CounterVal();

  const [SwiggyPresent, setSwiggyPresent] = useState(true);

  const [ToPRestaurants, SetToPRestaurants] = useState();

  const [MainRestaurants, SetMainRestaurants] = useState();

  let ShowRestaurants = [];

  const [isFilter, setisFilter] = useState(false);

  const [isTopRated, setisTopRated] = useState(false);

  const [isPureVeg, setisPureVeg] = useState(false);

  const [islessthan300, setislessthan300] = useState(false);

  const [is300to600, setis300to600] = useState(false);

  const [count, setcount] = useState(0);

  const [FilterBtnCss, SetFilterBtnCss] = useState("");

  const [FilterBtnBgColor, SetFilterBtnBgColor] = useState({
    bgcolor: "",
    color: "gray",
    border: "",
  });

  const [RatingBtnBgColor, SetRatingBtnBgColor] = useState({
    bgcolor: "",
    color: "gray",
    border: "",
  });

  const [PureVegBtnBgColor, SetPureVegBtnBgColor] = useState({
    bgcolor: "",
    color: "gray",
    border: "",
  });

  const [lessthan300BtnBgColor, Setlessthan300BtnBgColor] = useState({
    bgcolor: "",
    color: "gray",
    border: "",
  });

  const [Rs300to600BtnBgColor, SetRs300to600BtnBgColor] = useState({
    bgcolor: "",
    color: "gray",
    border: "",
  });

  const [imageSlideBtn, setimageSlideBtn] = useState({
    leftBtn: "#b6b6b6",
    rightBtn: "black",
  });

  let getLat;
  let getLong;

  getLat = useSelector((store) => {
    return Number(store.cart.lat);
  });
  getLong = useSelector((store) => {
    return Number(store.cart.long);
  });

  // console.log("ToPRestaurants", ToPRestaurants);
  // console.log("MainRestaurants", MainRestaurants);

  useEffect(() => {
    fetchResturantsApi();
  }, [getLat, getLong]);

  const getLatLongDisplayName = useSelector((store) => {
    return store.cart.LatLongDisplayName;
  });

  const abc = getLatLongDisplayName.split(",");
  const char1 = abc[0];
  // const char2 = abc.slice(1).join();

  const fetchResturantsApi = async () => {
    // console.log("getLat", getLat);
    // console.log("getLong", getLong);
    const response = await fetch(
      `https://swiggyserver-990t.onrender.com/api/restaurants?lat=${getLat}&lng=${getLong}&page_type=DESKTOP_WEB_LISTING`
    );

    const fetch_data = await response.json();

    if (fetch_data?.data?.communication?.swiggyNotPresent?.swiggyNotPresent) {
      setSwiggyPresent(false);
    }

    SetToPRestaurants(
      fetch_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    SetMainRestaurants(
      fetch_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //dispatch an action on click
  const GetRestName = (val) => {
    dispatch(addRestName(val));
  };

  useEffect(() => {
    if (width > 475) {
      SetFilterBtnCss("flex");
    } else {
      if (isFilter === false) {
        SetFilterBtnCss("none");
      }
    }
  }, [width, isFilter]);

  const Filterfunc = () => {
    setisFilter(!isFilter);

    if (FilterBtnCss === "" || FilterBtnCss === "none" || isFilter) {
      SetFilterBtnCss("flex");
    } else {
      SetFilterBtnCss("none");
    }

    if (FilterBtnBgColor.bgcolor === "") {
      SetFilterBtnBgColor({
        bgcolor: "#f0f0f5",
        color: "black",
        border: "1px solid black",
      });
    } else {
      SetFilterBtnBgColor({
        bgcolor: "",
        color: "gray",
        border: "",
      });
    }
  };

  const Topratedfunc = () => {
    setisTopRated(!isTopRated);
    if (RatingBtnBgColor.bgcolor === "") {
      SetRatingBtnBgColor({
        bgcolor: "#f0f0f5",
        color: "black",
        border: "1px solid black",
      });
    } else {
      SetRatingBtnBgColor({
        bgcolor: "",
        color: "gray",
        border: "",
      });
    }
  };

  const PureVegRestfunc = () => {
    setisPureVeg(!isPureVeg);
    if (PureVegBtnBgColor.bgcolor === "") {
      SetPureVegBtnBgColor({
        bgcolor: "#f0f0f5",
        color: "black",
        border: "1px solid black",
      });
    } else {
      SetPureVegBtnBgColor({
        bgcolor: "",
        color: "gray",
        border: "",
      });
    }
  };

  const lessthan300 = () => {
    setislessthan300(!islessthan300);
    if (lessthan300BtnBgColor.bgcolor === "") {
      Setlessthan300BtnBgColor({
        bgcolor: "#f0f0f5",
        color: "black",
        border: "1px solid black",
      });
    } else {
      Setlessthan300BtnBgColor({
        bgcolor: "",
        color: "gray",
        border: "",
      });
    }
  };

  const Rs300to600 = () => {
    setis300to600(!is300to600);

    if (Rs300to600BtnBgColor.bgcolor === "") {
      SetRs300to600BtnBgColor({
        bgcolor: "#f0f0f5",
        color: "black",
        border: "1px solid black",
      });
    } else {
      SetRs300to600BtnBgColor({
        bgcolor: "",
        color: "gray",
        border: "",
      });
    }
  };

  const PrevBtn = () => {
    const box = document.querySelector(".TopRestDiv");
    const width2 = box.clientWidth;
    if (width > 571) {
      box.scrollLeft = box.scrollLeft - width2 / 2;
    } else {
      box.scrollLeft = box.scrollLeft - width2 / 1.5;
    }

    if (count > 0) {
      setcount(count - 1);
    }
    setimageSlideBtn({
      leftBtn: "black",
      rightBtn: "black",
    });
    if (count <= 1) {
      setimageSlideBtn({
        leftBtn: "#b6b6b6",
        rightBtn: "black",
      });
    }
  };

  const NextBtn = () => {
    const box = document.querySelector(".TopRestDiv");
    const width2 = box.clientWidth;
    if (width > 571) {
      box.scrollLeft = box.scrollLeft + width2 / 2;
    } else {
      box.scrollLeft = box.scrollLeft + width2 / 1.5;
    }

    if (count < countVal) {
      setcount(count + 1);
    }
    setimageSlideBtn({
      leftBtn: "black",
      rightBtn: "black",
    });

    if (count >= countVal - 1) {
      setimageSlideBtn({
        leftBtn: "black",
        rightBtn: "#b6b6b6",
      });
    }
  };

  // Filter Btn Combinations Started

  MainRestaurants?.forEach((val) => {
    ShowRestaurants.push(val);
  });

  if (isTopRated) {
    ShowRestaurants = ShowRestaurants.filter((val) => val.info.avgRating >= 4);
  }

  if (isPureVeg) {
    ShowRestaurants = ShowRestaurants.filter((val) => val.info.veg);
  }

  if (islessthan300 && !is300to600) {
    ShowRestaurants = ShowRestaurants.filter((val) => {
      let costForTwo = val.info.costForTwo;
      let cost = [...costForTwo];
      let FinalCost = Number(
        cost
          .map((val) => parseInt(val))
          .filter((val) => !Number.isNaN(val))
          .join("")
      );
      if (FinalCost < 300) {
        return val;
      }
    });
  }

  if (!islessthan300 && is300to600) {
    ShowRestaurants = ShowRestaurants.filter((val) => {
      let costForTwo = val.info.costForTwo;
      let cost = [...costForTwo];
      let FinalCost = Number(
        cost
          .map((val) => parseInt(val))
          .filter((val) => !Number.isNaN(val))
          .join("")
      );
      if (FinalCost >= 300 && FinalCost <= 600) {
        return val;
      }
    });
  }

  if (islessthan300 && is300to600) {
    ShowRestaurants = ShowRestaurants.filter((val) => {
      let costForTwo = val.info.costForTwo;
      let cost = [...costForTwo];
      let FinalCost = Number(
        cost
          .map((val) => parseInt(val))
          .filter((val) => !Number.isNaN(val))
          .join("")
      );
      if (FinalCost <= 600) {
        return val;
      }
    });
  }

  // Filter Btn Combinations Ends

  return (
    <>
      {!SwiggyPresent ? (
        <LocationUnserviceable />
      ) : (
        <>
          <div
            className="NavbarSeprationcolor sticky top-16"
            style={{ height: "2rem" }}
          ></div>
          <div className="RestaurantsDiv">
            <div className="w-11/12 md:w-11/12 lg:w-9/12">
              {/* Top Resturants Slider started */}
              <div className="restaurants flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl float-left ml-1 md:ml-4 lg:ml-6 xl:ml-6">
                      Top restaurant chains in {char1}
                    </p>
                  </div>

                  <div className="TopRestArrowDiv">
                    <i
                      className="TopRestLeftArrow fa-sharp fa-solid fa-circle-left text-lg md:text-xl lg:text-2xl xl:text-2xl"
                      style={{ color: imageSlideBtn.leftBtn }}
                      onClick={PrevBtn}
                    ></i>
                    <i
                      className="TopRestRightArrow fa-sharp fa-solid fa-circle-left fa-flip-horizontal text-lg md:text-xl lg:text-2xl xl:text-2xl"
                      style={{ color: imageSlideBtn.rightBtn }}
                      onClick={NextBtn}
                    ></i>
                  </div>
                </div>

                {!ToPRestaurants ? (
                  <div className="overflow-hidden scroll-smooth">
                    <ShimmerCardTopRest />
                  </div>
                ) : (
                  <div className="restCard ">
                    <div className="TopRestDiv flex overflow-x-auto scroll-smooth p-2">
                      {ToPRestaurants.map((value) => {
                        return (
                          <Link
                            to={`/restaurantMenu/${value.info.id}`}
                            className=" TopRestCard  rest_ w-80 sm:w-56 "
                            key={value.info.id}
                            onClick={() => GetRestName(value)}
                          >
                            <RestCard Api_data={value} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              {/* Top Resturants Slider End */}

              {/* Main Restaurant Heading and Filter Btn Started  */}
              <div className="flex">
                <p className="MainRestHeading font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl float-left ml-2 mt-3">
                  Restaurants with online food delivery in {char1}
                </p>
              </div>

              <div className="filterBtnDiv ml-2">
                <button
                  className="filterbtn flex justify-between items-center rounded-full py-1.5 px-2.5 font-bold col-lg-3 col-md-3 col-sm-6"
                  style={{
                    backgroundColor: FilterBtnBgColor.bgcolor,
                    color: FilterBtnBgColor.color,
                    border: FilterBtnBgColor.border,
                  }}
                  onClick={Filterfunc}
                >
                  <span className="text-base">Filter</span>
                  <i
                    className="mx-1 fa-solid fa-filter"
                    style={{ fontSize: "0.8rem" }}
                  ></i>
                  {FilterBtnBgColor.bgcolor === "#f0f0f5" ? (
                    <i className="filterbtnX fa-solid fa-x py-1 pl-2 pr-1 " />
                  ) : null}
                </button>
              </div>

              {/* Filter Btn Started */}
              <div
                className="filter-btn flex row"
                style={{ display: FilterBtnCss }}
              >
                <button
                  className="filterbtn flex justify-between items-center rounded-full py-1.5 px-2.5 font-bold col-lg-3 col-md-3 col-sm-6"
                  style={{
                    backgroundColor: RatingBtnBgColor.bgcolor,
                    color: RatingBtnBgColor.color,
                    border: RatingBtnBgColor.border,
                  }}
                  onClick={Topratedfunc}
                >
                  <span className="text-base"> Ratings 4.0+</span>

                  {RatingBtnBgColor.bgcolor === "#f0f0f5" ? (
                    <i className="filterbtnX fa-solid fa-x py-1 pl-2 pr-1 " />
                  ) : null}
                </button>

                <button
                  className="filterbtn flex justify-between items-center rounded-full py-1.5 px-2.5 font-bold col-lg-3 col-md-3 col-sm-6"
                  style={{
                    backgroundColor: PureVegBtnBgColor.bgcolor,
                    color: PureVegBtnBgColor.color,
                    border: PureVegBtnBgColor.border,
                  }}
                  onClick={PureVegRestfunc}
                >
                  <span className="text-base"> Pure Veg</span>

                  {PureVegBtnBgColor.bgcolor === "#f0f0f5" ? (
                    <i className="filterbtnX fa-solid fa-x py-1 pl-2 pr-1" />
                  ) : null}
                </button>

                <button
                  className="filterbtn flex justify-between items-center rounded-full py-1.5 px-2.5 font-bold col-lg-3 col-md-3 col-sm-6"
                  style={{
                    backgroundColor: lessthan300BtnBgColor.bgcolor,
                    color: lessthan300BtnBgColor.color,
                    border: lessthan300BtnBgColor.border,
                  }}
                  onClick={lessthan300}
                >
                  <span className="text-base"> Less Than Rs. 300</span>

                  {lessthan300BtnBgColor.bgcolor === "#f0f0f5" ? (
                    <i className="filterbtnX fa-solid fa-x py-1 pl-2 pr-1" />
                  ) : null}
                </button>

                <button
                  className="filterbtn flex justify-between items-center rounded-full py-1.5 px-2.5 font-bold col-lg-3 col-md-3 col-sm-6"
                  style={{
                    backgroundColor: Rs300to600BtnBgColor.bgcolor,
                    color: Rs300to600BtnBgColor.color,
                    border: Rs300to600BtnBgColor.border,
                  }}
                  onClick={Rs300to600}
                >
                  <span className="text-base"> Rs. 300 - Rs. 600</span>

                  {Rs300to600BtnBgColor.bgcolor === "#f0f0f5" ? (
                    <i className="filterbtnX fa-solid fa-x py-1 pl-2 pr-1" />
                  ) : null}
                </button>
              </div>
              {/* Filter Btn End */}
              {/* Main Restaurant Heading and Filter Btn End  */}

              {ShowRestaurants?.length === 0 ? (
                <>
                  {ShowRestaurants?.length === 0 &&
                  !isTopRated &&
                  !isPureVeg &&
                  !islessthan300 &&
                  !is300to600 ? (
                    <div>
                      <ShimmerCardMainRest />
                    </div>
                  ) : (
                    <div className="mt-4 mx-2 ">
                      <p
                        className="animate-bounce font-bold text-base md:text-lg "
                        style={{ color: "#fc8019" }}
                      >
                        No restaurants were found, kindly modify your filter
                        preferences.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="restCard flex justify-center md:justify-between lg:justify-between row">
                  {ShowRestaurants?.map((value) => {
                    return (
                      <div
                        className="MainRest mr-3 flex justify-center col-lg-3 col-md-4 col-sm-6"
                        key={value.info.id}
                      >
                        <Link
                          to={`/restaurantMenu/${value.info.id}`}
                          className="rest_ flex justify-center items-center w-80 sm:w-56 mt-3 mb-3"
                          onClick={() => GetRestName(value)}
                        >
                          <RestCard Api_data={value} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Restaurants;
