import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import emailjs from "@emailjs/browser";
import "./contact.css";
import mail from "/imgs/mail.png";
import ScrollToTop from "../../components/ScrollToTop";

export default function Contact() {
  const [error, setError] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Please Enter a valid email");
    } else {
      setShowMessage(true);
    }

    emailjs.sendForm(
      "service_cf40543",
      "template_w3p08gh",
      event.target,
      "user_TKpqsH8g4lClfUeZdNIRY"
    );
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 6000);
  });

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 6000);
  });

  return (
    <>
      <ScrollToTop />
      <Header />
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact us</h2>
          <div className="texts"></div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="name">
                <label htmlFor="fullname">Your Full name</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Your Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="message">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                />
              </div>
              <button className="submit-btn">Submit</button>
              {error && (
                <div className="error-msg" style={{ color: "red" }}>
                  {error}
                </div>
              )}

              {showMessage && (
                <div className="success-msg">
                  Thanks for your message, We will reply soon
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="mail-container">
          <img className="mail-img" src={mail} alt="mail" />
          <p className="contact-desc">
            Get in-touch with us to start your DONATIONS, HELPS and SUPPORTS.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
