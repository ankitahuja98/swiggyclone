import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, addVal, clearItems, clearVal, tempstateStore } from "../utils/cartSlice";

const CartQuantityIncDecBtn = (props) => {
  const { val } = props;
  const { name, defaultPrice, price, vegClassifier, itemQuantity } = val;

  const [color, setColor] = useState({
    minus: "#60b246",
    plus: "#60b246",
  });

  const dispatch = useDispatch();

  const ItemOccurSt = useSelector((store) => {
    return store.cart.ItemOccurStore;
  });
  const getItemOccurSt = ItemOccurSt;

  // console.log("getItemOccurSt", getItemOccurSt);

  const Items = useSelector((store) => {
    return store.cart.items;
  });
  const getItems = Items;

  // console.log("getItems", getItems);

  const tempstate = useSelector((store) => {
    return store.cart.tempstateStore;
  });


  var isFlag = false;

  const DecQuantity = (ele) => {
    dispatch(tempstateStore(!tempstate))
    dispatch(clearVal(ele))
    dispatch(addVal(ele))

    getItems.filter((val) => {
      if (val.card.info.id === ele.id && !isFlag) {
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

  const IncrQuantity = (ele) => {
    dispatch(tempstateStore(!tempstate))
    dispatch(clearVal(ele))
    dispatch(addVal(ele))


    getItems.filter((val) => {
      if (val.card.info.id === ele.id && !isFlag) {
        dispatch(addItems(val));
        isFlag = true;
      }
    });
  };

  return (
    <div className="quantityBtn flex items-center justify-center rounded-lg h-10 py-2 w-20 md:w-20 lg:w-24 xl:w-24 ">
      <div className="cursor-pointer px-1 " onClick={() => DecQuantity(val)}>
        <i className="fa-solid fa-minus" style={{ color: color.minus }}></i>
      </div>

      <div className=" mx-2 md:mx-3 lg:mx-3 xl:mx-3 font-bold  text-center">{itemQuantity}</div>
      <div className="cursor-pointer px-1  " onClick={() => IncrQuantity(val)}>
        <i className="fa-solid fa-plus" style={{ color: color.plus }}></i>
      </div>
    </div>
  );
};

export default CartQuantityIncDecBtn;
