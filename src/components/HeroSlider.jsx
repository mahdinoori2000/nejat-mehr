import React from "react";
import { Slide } from "react-slideshow-image";
import { slideImages } from "../data";
import "react-slideshow-image/dist/styles.css";
import "../pages/landingPage/main.css";
import { Link } from "react-router-dom";

export default function () {
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
          <Link className="hero-cta-button" to="/contact">
            DONATE
          </Link>
        </div>
      </div>
    </>
  );
}
