import React from "react";
import { useNavigate } from "react-router-dom";
import pageNotFound from "../Images/pageNotFound.png";

const PageNotFOund404 = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 2000);

  return (
    <div>
      <div className="mt-5 flex justify-center items-center">
        <img src={pageNotFound} alt="page not found" />
      </div>
    </div>
  );
};

export default PageNotFOund404;
