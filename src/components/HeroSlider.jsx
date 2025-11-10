import { Slide } from "react-slideshow-image";
import { slideImages } from "../data";
import "react-slideshow-image/dist/styles.css";
import "../pages/landingPage/main.css";
import { useState } from "react";
import DonatePopup from "./donate-popup/DonatePopup";

export default function () {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <>
      <div className="slide-container">
        <div className="overlay"></div>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <img
                className="slide-bg-img"
                src={slideImage.url}
                alt={slideImage.caption}
              />
            </div>
          ))}
        </Slide>
        <div className="hero-elements">
          <h1 className="hero-title">Help Victims with our cooperation</h1>
          
             <>
      <button className="hero-cta-button" onClick={() => setShowDonate(true)}>Donate Now</button>

      <DonatePopup show={showDonate} onClose={() => setShowDonate(false)} />
    </>
       
        </div>
      </div>
    </>
  );
}
