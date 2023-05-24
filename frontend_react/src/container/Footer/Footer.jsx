import React, { useState } from "react";
import { client } from "../../client";
import { SocialMedia } from "../../components";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;
  const currYear = new Date().getFullYear();

  const handleChandeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    //following sanity guidelines
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text"> Get in touch</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:zacclarke@gmail.com" className="p-text">
            zacclarke@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel: +1 (514) 241-4845" className="p-text">
            +1 (514) 241-4845
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your name.."
              name="name"
              value={name}
              onChange={handleChandeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your email.."
              name="email"
              value={email}
              onChange={handleChandeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message.."
              name="message"
              value={message}
              onChange={handleChandeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank You for <span>reaching out</span>
          </h3>
        </div>
      )}
      <div className="p-20">
        <SocialMedia />
        <div className="border-t border-gray pt-4">
          Copyright &copy; Zac Clarke {currYear}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "bg-white"
);
