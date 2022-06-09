import React, { useEffect } from "react";
import data from "./Data";
import Cards from "./Cards";
import AOS from "aos";
import "aos/dist/aos.js";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Services We Offer</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10  mx-auto" data-aos="fade-in">
            <div className="row gy-4">
              {data.map((currentValue, index) => {
                return (
                  <Cards
                    key={index}
                    img={currentValue.imgSrc}
                    title={currentValue.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
