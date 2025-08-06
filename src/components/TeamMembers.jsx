import React from "react";
import { teamMembers } from "../data";
import "./css/testimonials.css";

export default function TeamMembers() {
  return (
    <>
      <div className="testimonials-container">
        <h3 className="testimonials-title">Our Team</h3>
        <div className="testimonial-cards">
          {teamMembers.map((eachCard) => {
            const { id, name, image, position } = eachCard;
            return (
              <div key={id} className="t-card">
                <div className="avatar-container">
                  <img src={image} alt="Team member" />
                </div>
                <h4 className="t-member-name">{name}</h4>
                <p className="t-member-pos">{position}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
