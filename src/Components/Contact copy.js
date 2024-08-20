import React from "react";
import "./CSS/Contact.css"

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
          <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl">Contact us</h1>
          <hr className="my-5" />
          <div className="ContactBody">

            <div className="FirstSection mr-5">
              <p className="heading font-bold text-lg" style={{ color: color.primary }}>
                Investor Queries and Grievances
              </p>

              <p
                className="heading mb-0 font-bold text-lg"
                style={{ color: color.primary }}
              >
                Abhishek Agarwal
              </p>
              <p className="mb-0" style={{ color: color.secondary }}>
                Vice President, Investor Relations
              </p>
              <p className="" style={{ color: color.secondary }}>
                Email:
                <span className="font-semibold" style={{ color: color.orange }}>
                  ir@swiggy.in
                </span>
              </p>

              <p
                className="heading mb-0 font-bold text-lg"
                style={{ color: color.primary }}
              >
                Sridhar M.
              </p>
              <p className="mb-0" style={{ color: color.secondary }}>
                Company Secretary
              </p>
              <p className="" style={{ color: color.secondary }}>
                {" "}
                Email:{" "}
                <span className="font-semibold" style={{ color: color.orange }}>
                  secretarial@swiggy.in
                </span>
              </p>

              <p
                className="heading mb-0 font-bold text-lg"
                style={{ color: color.primary }}
              >
                Registrar and Share Transfer Agent
              </p>
              <p className="mb-0" style={{ color: color.secondary }}>
                Link Intime India Private Limited
              </p>
              <p className="mb-0" style={{ color: color.secondary }}>
                Registrar and Share Transfer Agent
              </p>
              <p className="mb-0" style={{ color: color.secondary }}>
                543/A, 7th Main, 3rd Cross S L Bhyrappa Road, Hanumanthnagar
              </p>
              <p className="mb-0" style={{ color: color.secondary }}>
                Bengaluru, Karnataka 560019
              </p>
              <p className="" style={{ color: color.secondary }}>
                Website:{" "}
                <span className="font-semibold" style={{ color: color.orange }}>
                  https://www.linkintime.co.in/
                </span>
              </p>
            </div>

            <div className="SecondSection w-96">
              <p className="heading font-bold text-lg" style={{ color: color.primary }}>
                Public Relations and Media
              </p>

              <p
                className="heading mb-0 font-bold text-lg"
                style={{ color: color.primary }}
              >
                Abhishek Agarwal
              </p>
              <p style={{ color: color.secondary }}>
                Vice President, Corporate Affairs
              </p>

              <p
                className="heading mb-0 font-bold text-lg"
                style={{ color: color.primary }}
              >
                Sanjana Shetty
              </p>
              <p className="mb-0" style={{ color: color.secondary }}>
                Director, Corporate Communications
              </p>
              <p style={{ color: color.secondary }}>
                {" "}
                Email:{" "}
                <span className="font-semibold" style={{ color: color.orange }}>
                  pr@swiggy.in
                </span>
              </p>

              <p
                className="heading mb-0 font-bold text-lg"
                style={{ color: color.primary }}
              >
                Customer Support
              </p>
              <p className="" style={{ color: color.secondary }}>
                Email:{" "}
                <span className="font-semibold" style={{ color: color.orange }}>
                  support@swiggy.in
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
