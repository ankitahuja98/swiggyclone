import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCategory from "./MenuCategory";
import ShimmerCardRestMenu from "./ShimmerUI/ShimmerCardRestMenu";
import {
  addItems,
  addTempRest,
  clearItems,
  tempstateStore,
} from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ToggleButton from "../utils/ToggleButton";
import BestsellerBtn from "../utils/BestsellerBtn";
import Width from "../utils/Width";


const RestaurantMenu = () => {
  const width = Width();
  const [MenuData, SetMenuData] = useState([]);

  const [ItemCateg, SetItemCateg] = useState([]);

  const [SearchItemInp, SetSearchItemInp] = useState("");

  const [ShowItem, SetShowItem] = useState(0);

  const [model, setModel] = useState(false);

  const [modelValue, setmodelValue] = useState(false);

  const [getDatafromMenuCateg, setGetDatafromMenuCateg] = useState([]);

  const [isVeg, setisVeg] = useState();

  const [isNonVeg, setisNonVeg] = useState();

  const [isBestseller, setisBestseller] = useState();

  const { resid } = useParams();

  const tempstate = useSelector((store) => {
    return store.cart.tempstateStore;
  });

  useEffect(() => {
    fetchRestMenuApi();
  }, []);

  const fetchRestMenuApi = async () => {
    const response = await fetch(
      `https://swiggyserver-990t.onrender.com/api/menu?lat=28.6389315&lng=77.08668109999999&restaurantId=${resid}`
    );

    const data = await response.json();

    SetMenuData(data?.data?.cards[2]?.card?.card?.info);

    const ItemCategory =
      data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (value) =>
          value.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    SetItemCateg(ItemCategory);
  };

  //subscribe the (RestName) from store
  const RestName = useSelector((store) => {
    return store.cart.restName;
  });
  const getRestName = RestName;

  const dispatch = useDispatch();

  const ModelNoBtn = () => {
    setModel(false);
  };

  const ModelStartNewBtn = () => {
    dispatch(tempstateStore(!tempstate));
    setModel(false);
    setmodelValue(true);

    dispatch(addTempRest(getRestName[getRestName.length - 1]));

    dispatch(clearItems());
    dispatch(addItems(getDatafromMenuCateg));
  };

  const getdata = (val) => {
    setGetDatafromMenuCateg(val);
  };

  const getisVeg = (val) => {
    setisVeg(val);
  };

  const getisNonVeg = (val) => {
    setisNonVeg(val);
  };

  const getisBestseller = (val) => {
    setisBestseller(val);
  };

  const HandleChange = (e) => {
    SetSearchItemInp(e.target.value);
  };


  return (
    <>
      {ItemCateg.length === 0 ? (
        <ShimmerCardRestMenu />
      ) : (
        <div>
          <div
            className="NavbarSeprationcolor"
            style={{ height: "2rem" }}
          ></div>
          <div className="flex justify-center">
            <div className="RestMenuDiv w-11/12 md:w-10/12 lg:w-8/12 ">
              <div className="restInfo w-full mt-2">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl font-extrabold flex justify-start">
                  {MenuData?.name}
                </h1>
                <div className="restMenudetails my-4">
                  <div className="restMenudetailsDiv p-3 rounded-3xl">
                    <div className="flex font-bold text-lg">
                      <div className="RestMenuBox flex">
                        <div className="flex">
                          <p className="mb-1 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                            <i
                              className="fa-solid fa-star"
                              style={{ color: "#0a9400" }}
                            ></i>
                            {MenuData?.avgRatingString}{" "}
                          </p>
                          <p className="mb-1 ml-1 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                            ({MenuData?.totalRatingsString})
                          </p>
                        </div>

                        {width > 400 ? (
                          <p className="mx-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                            -
                          </p>
                        ) : (
                          ""
                        )}
                        <p className="mb-1 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                          {MenuData?.costForTwoMessage}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p
                        className="text-md font-bold mb-1 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg"
                        style={{ color: "#f27429" }}
                      >
                        {MenuData?.cuisines?.join(", ")}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
                        {MenuData?.areaName}, {MenuData?.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Veg NonVeg Toggle & Bestseller  button Start*/}
              <div className="block sm:flex items-center mb-3">
                <div className="SearchItemInp border-2 flex justify-between items-center w-48 rounded-md">
                  <input
                    value={SearchItemInp}
                    className="outline-none p-1 w-10/12 mx-1"
                    type="text"
                    placeholder="Search for dishes"
                    onChange={HandleChange}
                  />
                  {SearchItemInp ? (
                    <i
                      className="fa-solid fa-xmark mx-3"
                      onClick={() => SetSearchItemInp("")}
                    ></i>
                  ) : (
                    <i className="fa-solid fa-magnifying-glass mx-3"></i>
                  )}
                </div>

                <div className="ToogleBtn flex items-center">
                  <ToggleButton getisVeg={getisVeg} getisNonVeg={getisNonVeg} />
                  <BestsellerBtn getisBestseller={getisBestseller} />
                </div>
              </div>
              {/* Veg NonVeg Toggle & Bestseller button Ends*/}

              <div
                className="NavbarSeprationcolor"
                style={{ height: "2rem" }}
              ></div>

              {ItemCateg.map((val, ind) => (
                <MenuCategory
                  data={val}
                  index={ind}
                  key={ind}
                  showItem={ind === ShowItem ? true : false}
                  SetShowItem={() => SetShowItem(ind)}
                  model={model}
                  setModel={setModel}
                  MenuData={MenuData}
                  getdata={getdata}
                  modelValue={modelValue}
                  isVeg={isVeg}
                  isNonVeg={isNonVeg}
                  isBestseller={isBestseller}
                  SearchItemInp={SearchItemInp}
                />
              ))}
              {/* Model Start */}
              {model && (
                <div className="sticky bottom-16 z-10 flex justify-center items-center">
                  <div className="model p-4">
                    <p className="font-bold text-xl"> Items already in cart</p>
                    <p className=" text-sm">
                      Your cart contains items from other restaurant. Would you
                      like to reset your cart for adding items from this
                      restaurant?
                    </p>
                    <div className="flex justify-between">
                      <button className="NoBtn" onClick={ModelNoBtn}>
                        NO
                      </button>
                      <button
                        className="StartAFresh"
                        onClick={ModelStartNewBtn}
                      >
                        YES, START A FRESH{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* Model End */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default RestaurantMenu;
