import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import "./gallery.css";
import { galleryImages } from "../../data";

export default function Gallery() {
  const images = galleryImages.map((image) => {
    return (
      <img
        key={image.id}
        className="gallery-image"
        src={image.path}
        alt="gallery images"
      />
    );
  });

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="about-comp-container">
        <div className="gallery-hero">
          <div className="gallery-texts">
            <p className="gallery-hero-title">
              <span className="highlights">
                Nejat Mehr Charity Organization
              </span>{" "}
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
          <img
            className="gallery-hero-img"
            src="/imgs/gallery2.jpeg"
            alt="Qantat Education center"
          />
        </div>
        <div className="details--section">
          <p className="detail--title">
            Qanetat is a woman led educational center established at the heart
            of Kabul in 2021.
          </p>
          <p>
            Qanetat focuses on reducing vulnerability and building capacities
            among marginalized communities with special focus on women and
            children. This center has started teaching school subjects both
            online& in classes, Foriegn languages, tailoring, cup therapy etc
            for women since the fall of Afghan Republic government.
          </p>
        </div>
        <div className="gallery-images">{images}</div>
      </div>
      <Footer />
    </>
  );
}
