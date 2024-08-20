import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CSS/Cart.css";
import {
  clearItems,
  clearRestName,
  clearTempRest,
  tempstateStore,
} from "../utils/cartSlice";
import emptyCartPic from "../Images/empty_cart.webp";
import { useNavigate } from "react-router-dom";
import VegIcon from "../Images/vegicon.png";
import NonVegIcon from "../Images/nonvegicon.png";
import { Rest_img_url } from "../utils/constant";
import CartQuantityIncDecBtn from "./CartQuantityIncDecBtn";

const Cart = () => {
  const [NoContactDelMsg, setNoContactDelMsg] = useState(true);

  //Subscribe to a restname
  const RestName = useSelector((store) => {
    return store.cart.temp;
  });
  const getRestName = RestName;

  const resid = getRestName[getRestName.length - 1]?.info?.id;
  const name = getRestName[getRestName.length - 1]?.info?.name;
  const areaName = getRestName[getRestName.length - 1]?.info?.areaName;
  const cloudinaryImageId =
    getRestName[getRestName.length - 1]?.info?.cloudinaryImageId;

  const tempstate = useSelector((store) => {
    return store.cart.tempstateStore;
  });

  const dispatch = useDispatch();

  const clearCartBtn = () => {
    dispatch(tempstateStore(!tempstate));
    dispatch(clearItems());
    dispatch(clearRestName());
    dispatch(clearTempRest());
  };

  //click on btn render to home page without loading a page.
  const navigate = useNavigate();
  const GetHomePage = () => {
    navigate("/");
  };

  const color = {
    primary: "black",
    secondary: "#9f9fa3",
  };

  const gotoRestMenuPage = () => {
    navigate(`/restaurantMenu/${resid}`);
  };

  const ItemOccurSt = useSelector((store) => {
    return store.cart.ItemOccurStore;
  });
  const getItemOccurSt = ItemOccurSt;

  // console.log("getItemOccurSt", getItemOccurSt);

  //Bill Details Price
  const tempPrice = [];
  getItemOccurSt.forEach((val) => {
    const { defaultPrice, price, itemQuantity } = val;
    tempPrice.push(
      price === undefined
        ? (defaultPrice / 100) * itemQuantity
        : (price / 100) * itemQuantity
    );
  });
  // console.log("tempPrice",tempPrice)

  const ItemTotal = tempPrice.reduce((accum, val) => {
    return (accum += val);
  }, 0);

  const OrderPlaceFunc = () => {
    navigate("/orderplaced");
  };

  const DelivFees = 40;
  const PlatFees = 15;
  const GSTFees = Math.floor(ItemTotal * 0.12);
  const TotalPrice = ItemTotal + DelivFees + PlatFees + GSTFees;

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ backgroundColor: "#e9ecee" }}
    >
      {/* cart section 1 start */}
      <div
        className="CartSection1 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mt-4 mb-9"
        style={{ backgroundColor: "white" }}
      >
        {getItemOccurSt.length !== 0 ? (
          <>
            {getRestName.length >= 1 ? (
              <div className="flex justify-between">
                <div className="RestName flex w-8/12">
                  <img
                    className="restImg w-16 cursor-pointer"
                    src={Rest_img_url + cloudinaryImageId}
                    alt="food"
                    onClick={gotoRestMenuPage}
                  />
                  <div className="ml-4">
                    <p
                      className="font-bold text-base lg:text-lg mb-1 cursor-pointer"
                      onClick={gotoRestMenuPage}
                    >
                      {name}
                    </p>
                    <p className="text-xs sm:text-sm md:text-sm lg:text-sm">
                      {areaName}
                    </p>
                  </div>
                </div>

                <div className="float-right w-4/12 text-right ">
                  <button
                    className="clearCartBtn p-2 rounded-lg font-bold text-xs sm:text-sm md:text-base lg:text-lg"
                    style={{ backgroundColor: "rgb(203 59 58)", color: "white" }}
                    onClick={clearCartBtn}
                  >
                    Clear Cart
                    {/* <i className="fa-solid fa-trash fa-bounce mx-1"></i> */}
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-column justify-center mt-3 items-center">
              <div>
                <div>
                  {getItemOccurSt
                    ? getItemOccurSt.map((val, ind) => {
                        const {
                          name,
                          defaultPrice,
                          price,
                          vegClassifier,
                          itemQuantity,
                        } = val;

                        return (
                          <div key={ind}>
                            <div className="flex items-center my-3 justify-between">
                              {/* Item Name Started */}
                              <div className="ItemName w-10/12 flex items-center">
                                {vegClassifier === "VEG" ? (
                                  <img
                                    className="VegNonvegIcon w-5"
                                    src={VegIcon}
                                    alt="veg"
                                  />
                                ) : (
                                  <img
                                    className="VegNonvegIcon w-5"
                                    src={NonVegIcon}
                                    alt="nonveg"
                                  />
                                )}
                                <p className="line-clamp-3 md:line-clamp-2 lg:line-clamp-none xl:line-clamp-none text-sm md:text-base lg:text-lg font-semibold m-0 mx-2">
                                  {name}
                                </p>
                              </div>
                              {/* Item Name End */}

                              {/* Item Price Started*/}
                              <div className="BasePrice w-3/12 text-center">
                                <p className="text-sm md:text-base lg:text-lg m-0 mx-2">
                                  &#x20B9;
                                  {defaultPrice
                                    ? defaultPrice / 100
                                    : price / 100}
                                </p>
                              </div>
                              {/* Item Price End*/}

                              {/* Item Quantity Started*/}
                              <div className="QtyBtn w-3/12 position-relative top-3 flex justify-center mx-2 text-sm md:text-base lg:text-lg">
                                <CartQuantityIncDecBtn val={val} />
                              </div>
                              {/* Item Quantity End*/}

                              {/* subtotal Price Started*/}
                              <div className="SecondPrice w-4/12 text-center">
                                <p className="text-sm md:text-base lg:text-lg m-0 mx-2">
                                  &#x20B9;
                                  {defaultPrice
                                    ? (defaultPrice / 100) * itemQuantity
                                    : (price / 100) * itemQuantity}
                                </p>
                              </div>
                              {/* subtotal Price End*/}
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>

                <input
                  className="h-8 w-full p-4 outline-none"
                  style={{ backgroundColor: "#f9f9f9" }}
                  type="text"
                  placeholder="Any suggestions? We will pass it on..."
                />

                <div className="flex justify-between mt-4 border-1 p-2">
                  <div className="ml-2">
                    <input
                      type="Checkbox"
                      value={NoContactDelMsg}
                      onChange={() => setNoContactDelMsg(!NoContactDelMsg)}
                    />
                  </div>
                  <div className="ml-4 ">
                    <p className="m-0 text-sm md:text-base lg:text-lg font-semibold">
                      Opt in for No-contact Delivery
                    </p>
                    {NoContactDelMsg ? (
                      <>
                        <p
                          className="m-0 text-sm md:text-base lg:text-lg"
                          style={{ color: color.secondary }}
                        >
                          Unwell, or avoiding contact? Please select no-contact
                          delivery. Partner will safely place the order outside
                          your door (not for COD)
                        </p>
                      </>
                    ) : (
                      <>
                        <p
                          className="m-0 text-sm md:text-base lg:text-lg"
                          style={{ color: color.secondary }}
                        >
                          Our delivery partner will call to confirm. Please
                          ensure that your address has all the required details.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="BillDetails mt-3 text-sm md:text-base lg:text-lg">
                  <p className="font-semibold text-lg">Bill Details</p>

                  <div className="flex flex-row justify-between mb-2">
                    <span>Item Total</span>
                    <span>{ItemTotal}</span>
                  </div>

                  <div className="flex flex-row justify-between mb-2">
                    <span>Delivery Fee </span>
                    <span>{DelivFees}</span>
                  </div>

                  <hr />

                  <div className="flex flex-row justify-between mb-2">
                    <span>Delivery Tip</span>
                    <span className="AddTip">Add Tip</span>
                  </div>

                  <div className="flex flex-row justify-between mb-2">
                    <span>Platform Fee</span>
                    <span>{PlatFees}</span>
                  </div>

                  <div className="flex flex-row justify-between mb-2">
                    <span>GST and Restaurant Charges</span>
                    <span>{GSTFees}</span>
                  </div>

                  <hr className="border-2 border-black" />

                  <div className="flex flex-row justify-between mb-2 font-semibold text-lg">
                    <span>To Pay</span>
                    <span>{TotalPrice}</span>
                  </div>

                  <div
                    className="placeOrderBar bg-green-500 h-12  font-bold text-xl text-white mt-5 cursor-pointer"
                    onClick={() => {
                      OrderPlaceFunc();
                      clearCartBtn();
                    }}
                  >
                    <span className="placeorder w-full h-12 flex justify-center items-center">
                      Place Order
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          //If Cart is empty
          <div
            className="flex flex-column justify-center items-center"
            style={{ height: "34rem" }}
          >
            <img
              className="emptyCartPic mb-5"
              src={emptyCartPic}
              alt="EmptyCart"
            />
            <h3 className="font-bold">Your cart is empty</h3>
            <h5 className="text-center">You can go to home page to view more resturants</h5>
            <button
              className=" mt-3 m-1 p-2 bg-orange-500 text-white font-bold"
              onClick={GetHomePage}
            >
              See Restaurant NEAR YOU
            </button>
          </div>
        )}
      </div>
      {/* cart section 1 End*/}

      {/* cart section 2 Start*/}
      {getItemOccurSt?.length !== 0 ? (
        <div
          className="CartSection2 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mb-5"
          style={{ backgroundColor: "white" }}
        >
          <div className="p-4 border-2 text-sm md:text-base lg:text-lg">
            <p className="font-bold ">
              Review your order and address details to avoid cancellations
            </p>
            <p>
              <span style={{ color: "#ed6148" }}>Note:</span> If you cancel
              within 60 seconds of placing your order, a 100% refund will be
              issued. No refund for cancellations made after 60 seconds.
            </p>
            <p>Avoid cancellation as it leads to food wastage.</p>
            <p
              className="underline underline-offset-2 cursor-pointer"
              style={{ color: "#ed6148" }}
              // onClick={() => {
              //   window.open("https://www.swiggy.com/refund-policy");
              // }}
            >
              Read cancellation policy
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* cart section 2 End*/}
    </div>
  );
};

export default Cart;
