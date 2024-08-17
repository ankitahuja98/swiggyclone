import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";

const MenuCategory = (props) => {
  const { title } = props.data.card.card;
  const Itemcard = props.data.card.card.itemCards;

  const {
    model,
    setModel,
    MenuData,
    getdata,
    modelValue,
    isVeg,
    isNonVeg,
    isBestseller,
    SearchItemInp,
  } = props;

  const [DisplayItem, SetDisplayItem] = useState("");

  const VegMenu = [];

  const NonVegMenu = [];

  let ShowMenu = [];

  const ShowItemFunc = () => {
    props.SetShowItem();
    if (DisplayItem === "block") {
      SetDisplayItem("none");
    } else {
      SetDisplayItem("block");
    }
  };

  Itemcard.forEach((val) => {
    if (isVeg === true) {
      if (val.card.info.isVeg === 1) {
        if (!VegMenu.includes(val)) {
          VegMenu.push(val);
        }
      }
    } else {
      VegMenu.length = 0;
    }

    if (isNonVeg === true) {
      if (val.card.info.isVeg !== 1) {
        if (!NonVegMenu.includes(val)) {
          NonVegMenu.push(val);
        }
      }
    } else {
      NonVegMenu.length = 0;
    }
  });

  if (VegMenu.length !== 0) {
    ShowMenu.length = 0;
    VegMenu.forEach((val) => {
      ShowMenu.push(val);
    });
  }

  if (NonVegMenu.length !== 0) {
    ShowMenu.length = 0;
    NonVegMenu.forEach((val) => {
      ShowMenu.push(val);
    });
  }

  if (
    VegMenu.length === 0 &&
    NonVegMenu.length === 0 &&
    isVeg === false &&
    isNonVeg === false
  ) {
    Itemcard.forEach((val) => {
      ShowMenu.push(val);
    });
  }

  if (isBestseller) {
    ShowMenu = ShowMenu.filter((val) => {
      return val.card.info?.isBestseller === true;
    });
  }

  if (SearchItemInp) {
    ShowMenu = ShowMenu.filter((value) =>
      value.card.info.name.toLowerCase().includes(SearchItemInp.toLowerCase())
    );
  }


  return (
    <>
      <div className="accordionDiv">
        {ShowMenu.length !== 0 ? (
          <>
              <div
                className="AccordionHeader flex justify-between items-baseline cursor-pointer"
                onClick={ShowItemFunc}
              >
                <p className="font-bold text-xl">
                  {title} ({ShowMenu.length})
                </p>

                <div className="font-semibold text-xl mr-4 flex items-baseline">
                  {DisplayItem === "block" ? (
                    <i className="fa-solid fa-chevron-up mt-3" />
                  ) : (
                    <i className="fa-solid fa-chevron-up fa-rotate-180" />
                  )}
                </div>
              </div>

            {props.showItem ? (
              <div className="AccordionBody" style={{ display: DisplayItem }}>
                {ShowMenu.map((value) => {
                  return (
                    <div key={value.card.info.id}>
                      <MenuItems
                        value={value}
                        Itemcard={Itemcard}
                        DisplayItem={DisplayItem}
                        model={model}
                        setModel={setModel}
                        MenuData={MenuData}
                        getdata={getdata}
                        modelValue={modelValue}
                      />
                    </div>
                  );
                })}
              </div>
            ) : null}

            <div
              className="CategorySepration mb-2"
              style={{ backgroundColor: "#f1f1f6", height: "1rem" }}
            ></div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MenuCategory;
