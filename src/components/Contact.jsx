import React, { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
  });

  const EventHandle = (event) => {
    const { name, value } = event.target;
    setFormValues((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${formValues.name}, My contact number is ${formValues.phone}, My email address is ${formValues.email}`
    );
  };

  return (
    <>
      <div className="container text-center">
        <h1 className="my-5">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name"
                  name="name"
                  value={formValues.name}
                  onChange={EventHandle}
                />
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name"
                  name="phone"
                  value={formValues.phone}
                  onChange={EventHandle}
                />
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Name"
                  name="email"
                  value={formValues.email}
                  onChange={EventHandle}
                />
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="textarea"
                  value={formValues.text}
                  onChange={EventHandle}
                ></textarea>
              </div>
              <div className="my-5">
                <button className="btn btn-outline-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
