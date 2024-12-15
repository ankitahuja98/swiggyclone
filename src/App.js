import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
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
import PageNotFOund404 from "./utils/PageNotFOund404";
import Contact from "./Components/Contact";
const About = lazy(() => import("./Components/About"));
const Cart = lazy(() => import("./Components/Cart"));
const Search = lazy(() => import("./Components/Search"));
const Location = lazy(() => import("./Components/Location"));

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
            <Route exact="true" path="/" element={<Restaurants />} />
            <Route exact="true" path="/orderplaced" element={<OrderPlace />} />
            <Route
              exact="true"
              path="/about"
              element={
                <Suspense>
                  <About />
                </Suspense>
              }
            />
            <Route exact="true" path="/contact" element={<Contact />} />
            <Route
              exact="true"
              path="/search"
              element={
                <Suspense>
                  <Search />
                </Suspense>
              }
            />
            <Route
              exact="true"
              path="/location"
              element={
                <Suspense>
                  <Location />
                </Suspense>
              }
            />
            <Route
              exact="true"
              path="/restaurantMenu/:resid"
              element={
                <Suspense>
                  <RestaurantMenu />
                </Suspense>
              }
            />
            <Route
              exact="true"
              path="/cart"
              element={
                <Suspense>
                  <Cart />
                </Suspense>
              }
            />
            <Route path="*" element={<PageNotFOund404 />} />
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
