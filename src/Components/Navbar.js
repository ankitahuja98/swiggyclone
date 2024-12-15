import Logo_url from "../Images/swiggylogo.svg";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "./CSS/Navbar.css";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";

const Navbar = () => {
  const ItemOccurArr = useSelector((store) => {
    return store.cart.ItemOccurArr;
  });
  const getItemOccurArr = ItemOccurArr;

  const getLatLongDisplayName = useSelector((store) => {
    return store.cart.LatLongDisplayName;
  });

  const abc = getLatLongDisplayName.split(",");
  const char1 = abc[0];
  const char2 = abc.slice(1).join();

  const navigate = useNavigate();
  const GetHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center NavbarDiv sticky top-0">
      <div className="navbar flex justify-center items-center w-11/12 md:w-11/12 lg:w-10/12">
        <div className="flex justify-center ">
          <div className="main_logo hidden sm:flex items-center justify-center ">
            <img
              className="Navlogo w-8 cursor-pointer"
              src={Logo_url}
              alt="brand_logo"
              onClick={GetHomePage}
            />
          </div>

          <Tooltip title={getLatLongDisplayName} placement="bottom" arrow>
            <div
              className="location flex  sm:ml-10 mr-3 justify-start items-center cursor-pointer"
              onClick={() => navigate("/location")}
            >
              <i
                className="locationIcon fa-solid fa-location-arrow text-xl md:text-2xl"
                style={{ color: "#ff8118" }}
              ></i>
              <div className="locationNameDiv w-20 sm:w-40 md:w-52">
                <p className="mb-0 ml-1 font-bold text-sm sm:text-lg underline underline-offset-2 truncate">
                  {char1}
                </p>
                <p className=" mb-0 ml-1 position-relative bottom-1 font-normal text-xs truncate">
                  {char2}
                </p>
              </div>
            </div>
          </Tooltip>
        </div>

        <div className="nav_items">
          <ul className="flex p-0 mb-0">
            <li className="SearchNavLi sm:mx-2 md:mx-2 lg:mx-3 xl:mx-3">
              <Link to="/search">
                <i className="SearchIcon fa-solid fa-magnifying-glass mx-1 sm:mx-2 text-lg"></i>
                Search
              </Link>
            </li>
            <li className="sm:mx-2 md:mx-2 lg:mx-3 xl:mx-3 w-12">
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

            <li className=" sm:mx-2 md:mx-2 lg:mx-3 xl:mx-3 flex justify-center flex-row">
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
