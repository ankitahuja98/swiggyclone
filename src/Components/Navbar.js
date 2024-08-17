import Logo_url from "../Images/swiggylogo.svg";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "./CSS/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const ItemOccurArr = useSelector((store) => {
    return store.cart.ItemOccurArr;
  });
  const getItemOccurArr = ItemOccurArr;
  // console.log("getItemOccurArr", getItemOccurArr);

  const navigate = useNavigate();
  const GetHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center NavbarDiv sticky top-0">
      <div className="navbar w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12">
        <div className="main_logo">
          <img
            className="Navlogo w-8 cursor-pointer"
            src={Logo_url}
            alt="brand_logo"
            onClick={GetHomePage}
          />
        </div>

        <div className="nav_items">
          <ul className="d-flex p-0 mb-0">
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
