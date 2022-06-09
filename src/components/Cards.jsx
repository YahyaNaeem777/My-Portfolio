import React from "react";
import { NavLink } from "react-router-dom";
// import image from "../Images/image.jpg";

const Cards = (props) => {
  return (
    <div className="col-md-6 col-lg-4 col-10 mx-auto">
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to={"/contact"} className="btn btn-danger">
            Go SomeWhere
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cards;
