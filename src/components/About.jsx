import React from "react";
import Common from "./Common";
import image from "../Images/image.jpg";

const About = () => {
  return (
    <div>
      <Common
        name={"Welcome to About Page"}
        imgSrc={image}
        visit={"/contact"}
        btnName={"Contact Now"}
      />
    </div>
  );
};

export default About;
