import React from "react";
import { servicesComponentData } from "../data";
import "./css/services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">OUR SERVICES</h2>
        <div className="services-cards">
          {servicesComponentData.map((cards) => {
            return (
              <div key={cards.id} className={`card ${cards.name}-card`}>
                <div className="card--icon">{cards.icon}</div>
                <div className="card--texts">
                  <h4>{cards.text}</h4>
                  <p>{cards.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
