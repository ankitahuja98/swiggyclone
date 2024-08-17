import React from "react";

const ShimmerCardRestMenu = () => {
  const list = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    }
  ];

  return (
    <div className="mt-5 flex justify-center Loader">
      <div className=" w-7/12">
        <div className="Header h-40 rounded-2xl mb-5" style={{ backgroundColor: "#d8d9db" }}>
        </div>
        <div className=" mt-5">
          {list.map((val, ind) => {
            return (
              <div key={ind}>
                <div
                  className="Body mt-4 mb-3 cursor-pointer h-12 rounded-lg"
                  style={{ backgroundColor: "#d8d9db" }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShimmerCardRestMenu;
