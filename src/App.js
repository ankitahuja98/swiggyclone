import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { lazy, Suspense, useState } from "react";
import Restaurants from "./Components/Restaurants";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartBar from "./Components/CartBar";
import useMaybeCartBarShowns from "../src/utils/useMaybeCartBarShowns";
import OrderPlace from "./Components/OrderPlace";
import Temp from "./Components/Temp";
import useOnlineStatus from "../src/utils/useOnlineStatus";
import OfflinePage from "./utils/OfflinePage";
import Search from "./Components/Search";
import Location from "./Components/Location";
const Cart = lazy(() => import("./Components/Cart"));
const RestaurantMenu = lazy(() => import("./Components/RestMenu"));

function App() {
  const MaybeCartBarShowns = useMaybeCartBarShowns();
  const NetworkStatus = useOnlineStatus();

  return (
    <Provider store={appStore}>
      <Navbar />
      {NetworkStatus ? (
        <>
          <Temp />
          <Routes>
            <Route exact='true' path="/" element={<Restaurants/>} />
            <Route exact='true' path="/about" element={<About />} />
            <Route exact='true' path="/contact" element={<Contact />} />
            <Route exact='true' path="/orderplaced" element={<OrderPlace />} />
            <Route exact='true' path="/search" element={<Search />} />
            <Route exact='true' path="/location" element={<Location />} />
            <Route exact='true' 
              path="/restaurantMenu/:resid"
              element={
                <Suspense>
                  <RestaurantMenu />
                </Suspense>
              }
            />
            <Route exact='true' 
              path="/cart"
              element={
                <Suspense>
                  <Cart />
                </Suspense>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          {MaybeCartBarShowns && <CartBar />}
        </>
      ) : (
        <OfflinePage />
      )}
    </Provider>
  );
}

export default App;
