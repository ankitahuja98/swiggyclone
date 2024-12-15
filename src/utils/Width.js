import { useEffect, useState } from "react";

const Width = () => {
  const [Width_, setWidth] = useState(window.innerWidth);

  const reSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", reSize);

    return () => {
      window.removeEventListener("resize", reSize);
    };
  }, [Width_]);

  return Width_;
};

export default Width;

