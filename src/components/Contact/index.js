import React from "react";
import { useState } from "react";
import "./style.css";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "d9f0d57d-1ae5-4593-82d8-b987afc4bbfa",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="header">Contact</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Email Address"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message..."
          cols="30"
          rows="10"
        ></textarea>
        <button className="submitBtn">Submit</button>
      </form>

      {success && <p className="success">Form Submitted Successfully</p>}
    </>
  );
}

export default Contact;
