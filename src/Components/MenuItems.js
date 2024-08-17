import React, { useEffect, useState } from "react";
import { Rest_Menu_img } from "../utils/constant";
import QuantityIncDecBtn from "./QuantityIncDecBtn";
import { useDispatch, useSelector } from "react-redux";
import VegIcon from "../Images/vegicon.png";
import NonVegIcon from "../Images/nonvegicon.png";
import {
  addItems,
  addTempRest,
  addVal,
  clearItemOccurStore,
  clearVal,
  removeRestName,
  removeTempRest,
  tempstateStore,
} from "../utils/cartSlice";

const MenuItems = (props) => {
  const { model, setModel, MenuData, getdata, value, modelValue } =
    props;

  const [quantity, setQuantity] = useState(0);

  const {
    id,
    name,
    defaultPrice,
    price,
    description,
    imageId,
    isVeg,
    isBestseller,
  } = value.card.info;

  const { rating, ratingCountV2 } = value.card.info.ratings.aggregatedRating;

  // console.log("value", value);

  const tempstate = useSelector((store) => {
    return store.cart.tempstateStore;
  });

  const color = {
    primary: "black",
    secondary: "#928f9e",
  };

  const RestName = useSelector((store) => {
    return store.cart.restName;
  });
  const getRestName = RestName;

  // console.log("restname", getRestName);

  const RestTemp = useSelector((store) => {
    return store.cart.temp;
  });
  const getRestTemp = RestTemp;

  // console.log("getRestTemp", getRestTemp);

  const dispatch = useDispatch();

  const ItemOccurSt = useSelector((store) => {
    return store.cart.ItemOccurStore;
  });
  const getItemOccurSt = ItemOccurSt;

  // console.log("getItemOccurSt", getItemOccurSt);

  useEffect(() => {
    getItemOccurSt.forEach((ele) => {
      if (value.card.info.id === ele.id) {
        setQuantity(ele.itemQuantity);
      }
    });
  }, [getItemOccurSt]);

  let modeltemp = false;

  const AddItemBtn = (val) => {
    if (getRestTemp.length > 0) {
      if (
        getRestTemp[0]?.info.id !==
          getRestName[getRestName.length - 1].info.id &&
        model === false
      ) {
        modeltemp = true;
      }
    }
    if (modeltemp === false) {
      setQuantity(quantity + 1);
    } else {
      if (modelValue === true) {
        setQuantity(quantity + 1);
      }
    }

    dispatch(tempstateStore(!tempstate));
    dispatch(clearItemOccurStore());
    getdata(val);
    dispatch(clearVal());
    dispatch(addVal(val));

    // update Restaurant name
    if (getRestTemp.length === 0) {
      dispatch(addTempRest(getRestName[getRestName.length - 1]));
    } else if (
      getRestTemp[getRestTemp.length - 1]?.info?.id !==
      getRestName[getRestName.length - 1]?.info?.id
    ) {
      setModel(true);
    }

    // update cart
    if (getRestTemp.length === 0) {
      dispatch(addItems(val));
    } else if (getRestTemp.length === 1) {
      if (getRestTemp[getRestTemp.length - 1]?.info?.id === MenuData.id) {
        dispatch(addItems(val));
      } else if (
        getRestTemp[getRestTemp.length - 1]?.info?.id !== MenuData.id
      ) {
        setModel(true);
      }
    } else if (getRestTemp.length > 1) {
      if (getRestTemp[getRestTemp.length - 1]?.info?.id === MenuData.id) {
        dispatch(addItems(val));
      } else {
        setModel(true);
      }
      //yeh hoga hi hoga aghr getRestTemp.length > 1 hai to
      dispatch(removeRestName());
      dispatch(removeTempRest());
    }
  };

  return (
    <div className="MenuItem d-flex" key={id}>
      <div className="ItemDetails w-10/12">
        <div className="flex items-center">
          <p className="m-0">
            {isVeg === 1 ? (
              <img className="VegNonvegIcon w-5" src={VegIcon} alt="veg" />
            ) : (
              <img
                className="VegNonvegIcon w-5"
                src={NonVegIcon}
                alt="nonveg"
              />
            )}
          </p>
          {isBestseller ? (
            <div className="flex items-center" style={{ color: "#ff6e5a" }}>
              <i className="ml-1 fa-solid fa-ribbon text-md"></i>
              <span className=" mb-0.5 font-semibold underline underline-offset-1">
                Bestseller
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="text-l font-semibold mb-0">{name}</p>
        <p className="text-l font-semibold mb-1">
          &#8377; {defaultPrice / 100 || price / 100}
        </p>
        {rating ? (
          <p className="text-xs md:text-sm font-semibold mb-2">
            <i className="fa-solid fa-star " style={{ color: "#0a9400" }}></i>
            <span style={{ color: "#0a9400" }}>{rating} </span>({ratingCountV2})
          </p>
        ) : (
          ""
        )}
        <p
          className="line-clamp-3 md:line-clamp-2 lg:line-clamp-none xl:line-clamp-none text-xs font-normal w-10/12"
          style={{ color: color.secondary }}
        >
          {description}
        </p>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center img_">
        <img src={Rest_Menu_img + imageId} alt="err" />
        {quantity === 0 ? (
          <button
            className="AddBtn font-bold py-1 px-3  rounded-md w-75 "
            style={{ color: "#0a9400" }}
            onClick={() => AddItemBtn(value)}
          >
            Add
          </button>
        ) : (
          <QuantityIncDecBtn
            quantity={quantity}
            value={value}
            setQuantity={setQuantity}
          />
        )}
      </div>
    </div>
  );
};

export default MenuItems;
