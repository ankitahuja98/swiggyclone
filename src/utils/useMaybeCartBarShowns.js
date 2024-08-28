import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useMaybeCartBarShowns = () => {
  const [state, setState] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/grocery" || location.pathname === "/about" || location.pathname === "/contact" || location.pathname === "/cart" || location.pathname === "/orderplaced" || location.pathname === "/search" || location.pathname === "/location" || location.pathname === "/") {
      setState(false);
    } else {
      setState(true);
    }
  }, [location]);

  return state;
};

export default useMaybeCartBarShowns;
