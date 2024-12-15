import React from "react";
import "./CSS/About.css";
import swiggyabout1 from "../Images/SwiggyAbout1.png";
import swiggyabout2 from "../Images/Swiggyabout2.png";
import swiggyabout3 from "../Images/SwiggyAbout3.png";
import swiggyabout4 from "../Images/SwiggyAbout4.png";

const About = () => {
  return (
    <div>
      {/* FirstSection Start */}
      <div
        className="firstSection flex justify-between items-end border-2 border-black"
        style={{ backgroundColor: "#fe5005", height: "22rem" }}
      >
        <div>
          <img className="firstSectionImg" src={swiggyabout1} alt="pic" />
        </div>

        <div className="FirstSecAbout flex flex-col justify-between items-center ">
          <p
            className="font-bold text-2xl lg:text-3xl xl:text-4xl"
            style={{ color: "white" }}
          >
            About Swiggy
          </p>
          <p className="text-center" style={{ color: "white" }}>
            Swiggy is a new-age consumer-first organization offering an
            easy-to-use convenience platform, accessible through a unified app.{" "}
          </p>
        </div>

        <div>
          <img className="firstSectionImg" src={swiggyabout2} alt="pic" />
        </div>
      </div>
      {/* FirstSection End */}

      {/* SecondSecion Start */}
      <div className="SecondSecion flex flex-col justify-center items-center mt-4">
        {/* first row start */}
        <div className="SecondSecionRow row w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12">
          <div className="RowSection order-0 ">
            <img src={swiggyabout3} alt="pic" />
          </div>
          <div className="RowSection order-1 flex flex-col justify-center text-base md:text-lg lg:text-xl xl:text-xl">
            <p className="mission font-bold text-xl xl:text-2xl">Mission</p>
            <p style={{ color: "#9d9ea0" }}>
              Our mission is to elevate the quality of life of the urban
              consumer by offering unparalleled convenience. Convenience is what
              makes us tick. It’s what makes us get out of bed and say, “Let’s
              do this.”
            </p>
          </div>
        </div>
        {/* first row end */}

        {/* second row start */}
        <div className="SecondSecionRow row w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12 mt-5 ">
          <div className="RowSection2Img">
            <img src={swiggyabout4} alt="pic" />
          </div>
          <div className="RowSection2 flex flex-col justify-center">
            <p className="IndustryPioneer font-bold text-2xl">
              Industry pioneer
            </p>
            <p style={{ color: "#9d9ea0" }}>
              Being among the first few entrants, Swiggy has successfully
              pioneered the hyperlocal commerce industry in India, launching
              Food Delivery in 2014 and Quick Commerce in 2020. Due to the
              pioneering status of Swiggy, it is well-recognised as a leader in
              innovation in hyperlocal commerce and as a brand synonymous with
              the categories it is present in.
            </p>
          </div>
        </div>
        {/* second row end */}
      </div>
      {/* SecondSecion End */}

      {/* Third Section Start */}
      <div className="ThirdSection flex justify-center items-center my-5">
        <div className="ThirdSectionDiv flex justify-center items-center w-11/12  row py-3">
          <div className="ThSecCont text-center border-r-2  border-gray-300 flex flex-col justify-center items-center h-24 ">
            <p
              className="font-bold text-2xl lg:text-3xl xl:text-3xl"
              style={{ color: "#1ba672" }}
            >
              3bn+
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-xl">orders</p>
          </div>

          <div className="ThSecCont ThSecCont3 text-center border-r-2  border-gray-300 flex flex-col justify-center items-center h-24">
            <p
              className="font-bold text-2xl lg:text-3xl xl:text-3xl"
              style={{ color: "#1ba672" }}
            >
              ~200k+
            </p>
            <p lassName=" text-base md:text-lg lg:text-xl xl:text-xl">
              restaurant partners
            </p>
          </div>

          <div className="ThSecCont2 text-center border-r-2  border-gray-300 flex flex-col justify-center items-center h-24">
            <p
              className="font-bold text-2xl lg:text-3xl xl:text-3xl"
              style={{ color: "#1ba672" }}
            >
              380k+
            </p>
            <p lassName="text-base md:text-lg lg:text-xl xl:text-xl">
              delivery partners
            </p>
          </div>

          <div className="ThSecCont2 text-center flex flex-col justify-center items-center h-24">
            <p
              className="font-bold text-2xl lg:text-3xl xl:text-3xl"
              style={{ color: "#1ba672" }}
            >
              650+
            </p>
            <p lassName="text-base md:text-lg lg:text-xl xl:text-xl">
              cities in India
            </p>
          </div>
        </div>
      </div>
      {/* Third Section End */}
    </div>
  );
};

export default About;
