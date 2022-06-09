import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
                    {props.name}
                    <strong className="profile_name">
                      <br /> Yahya Naeem
                    </strong>
                  </h1>
                  <h2>We are the of Talented developers making websites</h2>
                  <div>
                    <NavLink to={props.visit}>
                      <button className="btn homeButton">
                        {props.btnName}
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 img_style">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="Home Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
