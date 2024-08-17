import { useEffect, useState } from "react";
import Width from "../utils/Width";

const CounterVal = () => {
  let width = Width();

  const [countVal, setcountVal] = useState();

  useEffect(() => {
    if (width > 1500) {
      setcountVal(2);
    } else if (width > 1275 && width < 1500) {
      setcountVal(3);
    } else if (width > 848 && width < 1275) {
      setcountVal(4);
    } else if (width > 740 && width < 848) {
      setcountVal(5);
    } else if (width > 636 && width < 740) {
      setcountVal(6);
    } else if (width > 571 && width < 636) {
      setcountVal(7);
    } else if (width > 525 && width < 571) {
      setcountVal(8);
    } else if (width > 478 && width < 525) {
      setcountVal(9);
    } else if (width > 425 && width < 478) {
      setcountVal(10);
    } else if (width > 400 && width < 425) {
      setcountVal(11);
    } else if (width > 370 && width < 400) {
      setcountVal(12);
    } else if (width > 340 && width < 370) {
      setcountVal(13);
    } else if (width > 310 && width < 340) {
      setcountVal(14);
    } else if (width > 290 && width < 310) {
      setcountVal(15);
    } else if (width > 280 && width < 290) {
      setcountVal(16);
    }
  }, [width]);

  return countVal;
};

export default CounterVal;
