import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import "./CSS/Search.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRestName, all_Restuarants } from "../utils/cartSlice";

const Search = () => {
  const dispatch = useDispatch();

  const [ToPRestaurants, SetToPRestaurants] = useState();

  const [MainRestaurants, SetMainRestaurants] = useState();

  let AllRestuarantsTemp = [];

  let AllRestuarants = [];
  let RestID = [];

  const [search, SetSearch] = useState("");

  const [SearchRest, setSearchRest] = useState([]);

  const getAllRestuarants = useSelector((store) => {
    return store.cart.all_Restuarants;
  });

  let getLat;
  let getLong;

  getLat = useSelector((store) => {
    return Number(store.cart.lat);
  });
  getLong = useSelector((store) => {
    return Number(store.cart.long);
  });

  // console.log("getAllRestuarants", getAllRestuarants);

  useEffect(() => {
    fetchResturantsApi();
  }, [getLat, getLong]);

  const fetchResturantsApi = async () => {
    // console.log("getLat",getLat)
    // console.log("getLong",getLong)

    const response = await fetch(
      // `https://swiggyserver-1.onrender.com/api/restaurants?lat=${getLat}&lng=${getLong}&page_type=DESKTOP_WEB_LISTING`
      `https://swiggyserver.netlify.app/.netlify/functions/api/api/restaurants?lat=${getLat}&lng=${getLong}&page_type=DESKTOP_WEB_LISTING`
    );

    const fetch_data = await response.json();

    SetToPRestaurants(
      fetch_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    SetMainRestaurants(
      fetch_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    if (MainRestaurants?.length !== 0 && ToPRestaurants?.length !== 0) {
      MainRestaurants?.forEach((val) => {
        AllRestuarantsTemp.push(val);
      });
      ToPRestaurants?.forEach((val) => {
        AllRestuarantsTemp.push(val);
      });
    }
    AllRestuarantsTemp.forEach((val) => {
      if (AllRestuarants.length === 0) {
        AllRestuarants.push(val);
        RestID.push(val.info.id);
      } else {
        if (!RestID.includes(val.info.id)) {
          AllRestuarants.push(val);
          RestID.push(val.info.id);
        }
      }
    });

    if (getAllRestuarants.length === 0) {
      AllRestuarants.forEach((val) => {
        dispatch(all_Restuarants(val));
      });
    }
  }, [MainRestaurants, ToPRestaurants]);

  // console.log("AllRestuarantsTemp", AllRestuarantsTemp);
  // console.log("AllRestuarants", AllRestuarants);
  // console.log("getAllRestuarants", getAllRestuarants);
  // console.log("search", search);
  // console.log("SearchRest", SearchRest);

  const GetRestName = (val) => {
    dispatch(addRestName(val));
  };

  const HandleChange = (e) => {
    SetSearch(e.target.value);

    const SearchedRest = getAllRestuarants.filter((value) =>
      value.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRest(SearchedRest);
  };

  useEffect(() => {
    if (search.length === 0) {
      setSearchRest([]);
    }
  }, [search]);

  return (
    <>
      <div className="NavbarSeprationcolor" style={{ height: "2rem" }}></div>

      <div className="SeaarchPageDiv container flex flex-col justify-center items-center">
        <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 flex border-2 px-4 mb-5 rounded-lg">
          <input
            className="filterInput"
            type="text"
            placeholder="Search Restaurants"
            value={search}
            onChange={HandleChange}
          />
          {search ? (
            <i
              className="fa-solid fa-x py-1 pl-2 pr-1 searchbtn text-lg "
              onClick={() => SetSearch("")}
            />
          ) : (
            <i className="fa-solid fa-magnifying-glass searchbtn text-lg "></i>
          )}
        </div>

        <div className="w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 flex justify-center items-center">
          {SearchRest.length === 0 ? (
            <></>
          ) : (
            <div className="restCard flex row w-full ">
              {SearchRest.map((value) => {
                return (
                  <div
                    className="restCardDiv col-lg-3 col-md-4 col-sm-6 mt-3 mb-3 mx-3 p-0 w-80 sm:w-56 "
                    key={value.info.id}
                  >
                    <Link
                      to={`/restaurantMenu/${value.info.id}`}
                      className="rest_ flex justify-center items-center "
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
  );
};

export default Search;
