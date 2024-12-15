import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  const color = {
    primary: "black",
    secondary: "#757575",
    orange: "#ff6d00",
  };
  return (
    <>
      <div className="NavbarSeprationcolor" style={{ height: "2rem" }}></div>

      <div className="ContactPage flex justify-center my-5">
        <div className="w-10/12">
          <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl">
            Contact us
          </h1>
          <hr className="my-5" />
          <div className="ContactBody">
            <div className="FirstSection mr-5">
              <p
                className="heading font-bold text-lg"
                style={{ color: color.primary }}
              >
                For Website Queries
              </p>

              <p
                className="heading mb-0 font-bold text-lg"
                style={{ color: color.primary }}
              >
                Ankit Ahuja
              </p>
              <p className="mb-0" style={{ color: color.secondary }}>
                Software Developer
              </p>
              <p className="" style={{ color: color.secondary }}>
                Website:{" "}
                <span className="font-semibold" style={{ color: color.orange }}>
                  https://ankitahujaportfolio.netlify.app
                </span>
              </p>

              <p className="mt-20 text-lg" style={{ color: color.secondary }}>
                <span
                  className="font-semibold text-lg"
                  style={{ color: color.orange }}
                >
                  Disclaimer:{" "}
                </span>
                This website is a clone created solely for educational purposes
                and is not intended for any business transactions or promotional
                activities.
              </p>
            </div>

            <div className="SecondSection w-96">
              <p
                className="heading mb-0 font-bold text-lg"
                style={{ color: color.primary }}
              >
                Customer Support
              </p>
              <p className="" style={{ color: color.secondary }}>
                Email:{" "}
                <span className="font-semibold" style={{ color: color.orange }}>
                  CustomerSupport@support.in
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
