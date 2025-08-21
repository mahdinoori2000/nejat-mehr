import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import "./gallery.css";
import { galleryImages } from "../../data";
import { galleryImages2 } from "../../data";

export default function Projects() {
  {
    /* {FIRST PROJECT IMAGES} */
  }

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

  {
    /* {SECOND PROJECT IMAGES} */
  }
  const images2 = galleryImages2.map((image) => {
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
      {/* {FIRST PROJECT} */}

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

      {/* {SECOND PROJECT} */}
      <div className="about-comp-container">
        <div className="gallery-hero">
          <div className="gallery-texts">
            <p className="gallery-hero-title">
              <span className="highlights">
                Nejat Mehr Charity Organization
              </span>{" "}
              supports{" "}
              <span className="highlights">
                Afghan migrants deported from Iran
              </span>{" "}
              with emergency assistance
            </p>
            <p>
              Nejat Mehr charity organization provided humanitarian assistance
              to Afghan migrants who were recently deported from Iran. This
              support took place in Herat province, where many returnees were in
              urgent need of help.
            </p>
            <p>
              Nejat Mehr charity organization and its volunteer team distributed
              cash assistance to the migrants, helping them cover their basic
              expenses. In addition, the organization rented buses to transport
              the returnees to their home provinces and final destinations
              safely.
            </p>
          </div>
          <img
            className="gallery-hero-img"
            src="/assets/img/gallery/9.jpg"
            alt="Qantat Education center"
          />
        </div>
        <div className="details--section">
          <p className="detail--title">
            Nejat Mehr calls upon humanitarian organizations and individuals to
            continue supporting Afghan returnees, many of whom face difficult
            conditions upon arrival back in Afghanistan.
          </p>
          <p>
            Support for deported migrants in Herat Through these efforts, Nejat
            Mehr aims to ease the immediate hardships of displaced families and
            ensure that returnees can travel to their homes with dignity.
          </p>
        </div>
        <div className="gallery-images">{images2}</div>
      </div>
      <Footer />
    </>
  );
}
