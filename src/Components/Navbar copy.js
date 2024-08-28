import Logo_url from "../Images/swiggylogo.svg";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "./CSS/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
// import getLatLong from "../utils/getLatLong";
import LatLong from "../utils/LatLong";
import { useEffect, useState } from "react";
import { lat, LatLongResult, long } from "../utils/cartSlice";

const Navbar = () => {
  let dispatch = useDispatch();

  const [latlongInput, setlatlongInput] = useState(
    "Tilak Nagar, Rajouri Garden Tehsil, West Delhi District, Delhi, India"
  );
  const [latlongFinalInput, setlatlongFinalInput] = useState(
    "Tilak Nagar, Rajouri Garden Tehsil, West Delhi District, Delhi, India"
  );

  const [displaylatlong, setdisplaylatlong] = useState("none");

  const ItemOccurArr = useSelector((store) => {
    return store.cart.ItemOccurArr;
  });
  const getItemOccurArr = ItemOccurArr;
  // console.log("getItemOccurArr", getItemOccurArr);

  const navigate = useNavigate();
  const GetHomePage = () => {
    navigate("/");
  };

  let latlongresult = LatLong(latlongFinalInput);
  let latitutde;
  let longitutde;

  latlongresult?.forEach((val) => {
    if (val.display_name === latlongInput) {
      console.log("same hai");
      latitutde = val.lat;
      longitutde = val.lon;
    }
    dispatch(LatLongResult(val))
  });

  useEffect(() => {
    dispatch(lat(latitutde));
    dispatch(long(longitutde));
    

  }, [latitutde, longitutde]);

  console.log("latlongresult", latlongresult);
  console.log("latlongFinalInput", latlongFinalInput);

  return (
    <div className="flex justify-center NavbarDiv sticky top-0">
      <div className="navbar flex items-start w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12">
        <div className="flex justify-center ">
          <div className="main_logo ">
            <img
              className="Navlogo w-8 cursor-pointer"
              src={Logo_url}
              alt="brand_logo"
              onClick={GetHomePage}
            />
          </div>
          <div className="LatLong mx-3 flex flex-column justify-center items-center">
            <div>
              <input
                className="p-1.5 rounded-lg outline-none pl-3 pr-9"
                type="text"
                value={latlongInput}
                onChange={(e) => setlatlongInput(e.target.value)}
                placeholder="Search by place"
                style={{ border: "1px solid gray", maxWidth: "20rem" }}
              />

              <span className="position-relative right-7">
                <i
                  className="fa-solid fa-magnifying-glass"
                  onClick={() => {
                    setlatlongFinalInput(latlongInput);
                    setdisplaylatlong("block");
                  }}
                ></i>
              </span>
            </div>

            <div
              className="border-2 overflow-auto p-2 position-relative right-2 "
              style={{
                display: displaylatlong,
                maxWidth: "20rem",
                maxHeight: "15rem",
                backgroundColor: "white",
              }}
            >
              {latlongresult?.map((val, ind) => {
                const { display_name } = val;
                return (
                  <div
                    key={ind}
                    className="cursor-pointer text-nowrap p-1 hover:block"
                    onClick={() => {
                      setlatlongInput(display_name);
                      setdisplaylatlong("none");
                    }}
                  >
                    {display_name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="nav_items">
          <ul className="flex p-0 mb-0">
            <li className="SearchNavLi sm:mx-2 md:mx-2 lg:mx-3 xl:mx-3">
              <Link to="/search">
                <i className="SearchIcon fa-solid fa-magnifying-glass mx-2 text-lg"></i>
                Search
              </Link>
            </li>
            <li className="sm:mx-2 md:mx-2 lg:mx-3 xl:mx-3">
              <Link to="/">Home</Link>
            </li>

            <li className="NavInfo text-center px-0 py-1 sm:mx-2 md:mx-2 lg:mx-3 xl:mx-3">
              <Link>Info</Link>
              <ul className="dropdown">
                <li className="border-b-2 p-1 flex items-center justify-start">
                  <Link to="/about">About</Link>
                </li>
                <li className=" p-1 flex items-center justify-start">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </li>

            <li className="sm:mx-2 md:mx-2 lg:mx-3 xl:mx-3 flex justify-center flex-row">
              {getItemOccurArr.length > 0 ? (
                <span className="cartIcon bg-green-500 text-white">
                  {getItemOccurArr.length}
                </span>
              ) : (
                ""
              )}
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
