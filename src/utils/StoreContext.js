import React, { createContext, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [ItemsQty, setItemsQty] = useState({});

  const addToCart = (itemId) => {
    if (!ItemsQty[itemId]) {
      setItemsQty((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setItemsQty((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setItemsQty((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    ItemsQty,
    setItemsQty,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
