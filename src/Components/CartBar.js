import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartBar = () => {
  const ItemOccurArr = useSelector((store) => {
    return store.cart.ItemOccurArr;
  });
  const getItemOccurArr = ItemOccurArr;

  const navigate = useNavigate();
  const ViewCartBtn = () => {
    navigate("/cart");
  };
  return (
    <>
      {getItemOccurArr.length > 0 ? (
        <div className="sticky bottom-0 flex justify-center z-10">
          <div className="cartBar py-3 w-11/12 md:w-10/12 lg:w-7/12">
            <div className="ml-5 text-sm sm:text-base md:text-lg lg:text-lg">{getItemOccurArr.length} Items added</div>
            <div className="mr-5 cursor-pointer text-sm sm:text-base md:text-lg lg:text-lg" onClick={ViewCartBtn}>
              View Cart
              <i className=" ml-1 fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CartBar;
