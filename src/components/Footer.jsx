import React from "react";
import { Link } from "react-router-dom";
import { footerInfo, footerServices } from "../data";
import logo from "/imgs/logo2.png";
import "./css/footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer-section">
        <div className="container">
          <div className="contact-us">
            <h4>CONTACT US</h4>
            <ul>
              <li>
                <a href="tel:+93781407040">+93 (0) 781407040</a>
              </li>
              <li>
                <a href="mailto:info@nejatmehr.com">info@nejatmehr.com</a>
              </li>
            </ul>
          </div>
          <div className="services">
            <h4>OUR SERVICE</h4>
            <ul>
              {footerServices.map((footerServices) => {
                const { id, url, text } = footerServices;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="info">
            <h4>INFORMATION</h4>
            <ul>
              {footerInfo.map((footerInfo) => {
                const { id, url, text } = footerInfo;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cta-col">
            <h4>HELP DESERVING PEOPLE</h4>
            <Link to="/contact" className="cta-btn">
              DONATE
            </Link>
          </div>
        </div>
      </section>
      <section className="logo-section">
        <div className="logo-container">
          <img
            src={logo}
            alt="Nejat Mehr Charity Organization"
            className="footer-logo"
          />
          <p>
            Nejat Mehr Charity Organization is istablished to help those
            DESERVING people who are STRUGGLING with the difficulties through
            all past four DECADES OF WAR in Afghanistan.
          </p>
        </div>
      </section>
      <section className="copyright-section">
        <h4>
          Copyright ™ Nejat Mehr Charity Organization 2022. All Rights Reserved
        </h4>
      </section>
    </footer>
  );
}
