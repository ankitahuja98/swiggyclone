import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { lazy, Suspense } from "react";
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
// import GoogleMap from "./utils/GoogleMap";
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
            <Route path="/swiggyclone" element={<Restaurants />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/orderplaced" element={<OrderPlace />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/restaurantMenu/:resid"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <RestaurantMenu />
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          {MaybeCartBarShowns && <CartBar />}
          {/* <GoogleMap/> */}
        </>
      ) : (
        <OfflinePage />
      )}
    </Provider>
  );
}

export default App;
