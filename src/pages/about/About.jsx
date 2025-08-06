import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";
import TeamMembers from "../../components/TeamMembers";
import { aboutPage } from "../../data";
import "./about.css";

export default function About() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <h2 className="about-main-title">About Nejat Mehr</h2>
      <section className="about-component">
        <div className="about-comp-container">
          <p className="about-details">
            NMCO is a non-profit, community-based, non-governmental, and
            nonpolitical organization run by workers, volunteer youths and
            adults of different disciplines in close cooperation with local
            communities who continue to work tirelessly for the relief of the
            affected, marginalized and deprived people of Afghanistan to live in
            peace, dignity, harmony, united, and empowered in a Islamic and
            human and just society so that they achieve their universal rights.
            NMCO is established in 2022 in Kabul, incorporated under the laws of
            Afghanistan and holding Afghanistan Ministry of Economy License #
            5453. The Executive Management is headed by the Executive Director
            and includes the Deputy Director, heads of the various functions of
            the organization, M&E as well as R&D departments. Nearly all
            management-level staff have at least a bachelor with some having
            Master's degrees and experiences of working with national and
            international organizations. Our cadre of managers, personnel, and
            trainers have more than 5-10 years of professional work experience
            in the public and private sectors. NMCO has a full-fledged office in
            Kabul.
          </p>
          {aboutPage.map((parts) => {
            const { id, name, description } = parts;
            return (
              <div key={id} className="about-comp-sm-cards">
                <h2 className="about-page-title">{name}</h2>
                <p className="about-paragraph">{description}</p>
              </div>
            );
          })}
        </div>
        <div className="about-comp-container">
          <TeamMembers />
        </div>
      </section>
      <Footer />
    </>
  );
}
