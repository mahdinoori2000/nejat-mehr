import React from "react";
import About from "../../components/About";
import HeroSlider from "../../components/HeroSlider";
import Services from "../../components/Services";

import "./main.css";

export default function Main() {
  return (
    <>
      <HeroSlider />
      <Services />
      <div className="gallery-hero about-comp-container">
        <img
          className="gallery-hero-img"
          src="/imgs/gallery2.jpeg"
          alt="Qantat Education center"
        />

        <div className="gallery-texts">
          <p className="gallery-hero-title">
            <span className="highlights">Nejat Mehr Charity Organization</span>{" "}
            cooperates with{" "}
            <span className="highlights">
              Qanetat Islamic and Technical Education Center
            </span>{" "}
            in the education of girls
          </p>
          <p>
            Nejat Mehr charity organization wants to cooperate with Qanetat
            Islamic and technical education center in the education department
            of the female category.
          </p>
          <p>
            Nejat Mehr charity organization asks humanitarian institutions and
            individuals to facilitate education for girls in Afghanistan.
          </p>
        </div>
      </div>
      <About />
    </>
  );
}
