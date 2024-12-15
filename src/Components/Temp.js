import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemOccurArr,
  clearItemOccurArr,
  clearItemOccurStore,
  ItemOccurStore,
} from "../utils/cartSlice";

const Temp = () => {
  let ValIndex;
  const dispatch = useDispatch();

  const Items = useSelector((store) => {
    return store.cart.items;
  });
  const getItems = Items;

  const ItemOccurSt = useSelector((store) => {
    return store.cart.ItemOccurStore;
  });
  const getItemOccurSt = ItemOccurSt;
  // console.log("getItemOccurSt", getItemOccurSt);

  const tempstate = useSelector((store) => {
    return store.cart.tempstateStore;
  });
  // console.log("tempstatezz", tempstate);

  const ItemVal = useSelector((store) => {
    return store.cart.val;
  });
  // console.log("ItemVal", ItemVal);

  // find Val Index
  useEffect(() => {
    ValIndex = getItemOccurSt.indexOf(ItemVal[0]);
  }, [ItemVal]);

  let ItemOccurArr = [];
  let FinalItemOccurArr = [];
  let ItemsOccurence = {};
  const itemQuantity = 1;

  getItems.forEach((val) => {
    if (ItemOccurArr.length === 0) {
      ItemsOccurence = {
        id: val.card.info.id,
        name: val.card.info.name,
        price: val.card.info.price,
        defaultPrice: val.card.info.defaultPrice,
        vegClassifier: val.card.info.itemAttribute.vegClassifier,
        itemQuantity: itemQuantity,
      };
      ItemOccurArr.push(ItemsOccurence);
    } else if (ItemOccurArr.length > 0) {
      let updatedItemQuant = 1;
      ItemOccurArr.forEach((ele) => {
        if (ele.id === val.card.info.id) {
          updatedItemQuant = ele.itemQuantity + 1;
        }
      });
      ItemsOccurence = {
        id: val.card.info.id,
        name: val.card.info.name,
        price: val.card.info.price,
        defaultPrice: val.card.info.defaultPrice,
        vegClassifier: val.card.info.itemAttribute.vegClassifier,
        itemQuantity: updatedItemQuant,
      };
      ItemOccurArr.push(ItemsOccurence);
    }
  });

  ItemOccurArr.forEach((val) => {
    if (FinalItemOccurArr.length === 0) {
      FinalItemOccurArr.push(val);
    } else if (FinalItemOccurArr.length > 0) {
      FinalItemOccurArr = FinalItemOccurArr.filter((ele) => {
        return ele.id !== val.id;
      });
      FinalItemOccurArr.push(val);
    }
  });

  useEffect(() => {
    dispatch(clearItemOccurArr());

    ItemOccurArr.forEach((val) => {
      dispatch(addItemOccurArr(val));
    });

    dispatch(clearItemOccurStore());

    FinalItemOccurArr.forEach((val) => {
      dispatch(ItemOccurStore(val));
    });
  }, [tempstate]);

  return <></>;
};

export default Temp;
