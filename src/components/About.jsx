import React from "react";
import "./css/about.css";
import { aboutComponentData } from "../data";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">A LITTLE ABOUT US</h2>
          <div className="about-cards">
            {aboutComponentData.map((cards) => {
              const { id, name, text, description, icon } = cards;
              return (
                <div key={id} className={`card ${name}-card`}>
                  <div className="card--icon">{icon}</div>
                  <div className="card--texts">
                    <h3>{text}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="readMore">
            <Link to="/about">Read more about us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
