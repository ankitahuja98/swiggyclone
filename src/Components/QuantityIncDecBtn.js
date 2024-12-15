import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  clearItems,
  tempstateStore,
} from "../utils/cartSlice";

const QuantityIncDecBtn = (props) => {
  const { quantity, setQuantity, value } =
    props;

  const dispatch = useDispatch();

  const [color, setColor] = useState({
    minus: "#60b246",
    plus: "#60b246",
  });

  useEffect(() => {
    if (quantity === 1) {
      setColor({
        minus: "#60b246",
        plus: "#60b246",
      });
    } else if (quantity === 10) {
      setColor({
        minus: "#60b246",
        plus: "#cccccc",
      });
    }
  }, [quantity]);

  const Items = useSelector((store) => {
    return store.cart.items;
  });
  const getItems = Items;

  const tempstate = useSelector((store) => {
    return store.cart.tempstateStore;
  });

  var isFlag = false;

  const DecQuantity = (value) => {
    setQuantity(quantity - 1);

    dispatch(tempstateStore(!tempstate))

    getItems.filter((val) => {
      if (val.card.info.id === value.card.info.id && !isFlag) {
        const findIndex = getItems.indexOf(val);
        const final1 = getItems.slice(0, findIndex);
        const final2 = getItems.slice(findIndex + 1);
        let final = final1.concat(final2);

        dispatch(clearItems());
        final.forEach((val) => {
          dispatch(addItems(val));
        });
        isFlag = true;
      }
    });
  };

  const IncrQuantity = (value) => {
    setQuantity(quantity + 1);
    dispatch(tempstateStore(!tempstate))
    dispatch(addItems(value));
  };

  return (
    <div className="quantityBtn flex items-center justify-center rounded-lg h-10 p-2">
      <div className="quantityBtnMinus cursor-pointer px-1" onClick={() => DecQuantity(value)}>
        <i className="fa-solid fa-minus" style={{ color: color.minus }}></i>
      </div>

      <div className="mx-3 font-bold">{quantity}</div>
      <div className=" quantityBtnPlus cursor-pointer px-1" onClick={() => IncrQuantity(value)}>
        <i className="fa-solid fa-plus" style={{ color: color.plus }}></i>
      </div>
    </div>
  );
};

export default QuantityIncDecBtn;
