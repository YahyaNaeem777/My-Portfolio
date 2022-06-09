import React from "react";
import image from "../Images/image.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <div>
      <Common
        name={"Grow Your Business with"}
        imgSrc={image}
        visit={"/services"}
        btnName={"Get Started"}
      />
    </div>
  );
};

export default Home;
