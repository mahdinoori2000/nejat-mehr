import { Link } from "react-router-dom";
import { footerInfo, footerServices } from "../data";
import logo from "/imgs/logo2.png";
import "./css/footer.css";
import DonatePopup from "./donate-popup/DonatePopup";
import { useState } from "react";

export default function Footer() {
const [showDonate, setShowDonate] = useState(false);

  return (
    <footer>
      <section className="footer-section">
        <div className="container">
          <div className="contact-us">
            <h4>CONTACT US</h4>
            <ul>
              <li>
                <a href="tel:+93729599599">+93 (0) 729599599</a>
                <a href="tel:+93780690909">+93 (0) 780690909</a>
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
       
             <>
      <button className="cta-btn" onClick={() => setShowDonate(true)}>Donate Now</button>

      <DonatePopup show={showDonate} onClose={() => setShowDonate(false)} />
    </>
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
