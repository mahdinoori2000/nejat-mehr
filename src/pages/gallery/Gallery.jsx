import React from "react";

import { photos } from "../../data/gallery";
import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Download,
  Zoom,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./gallery.css";

// Your photo list (sample)
export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="container py-5">
        <MasonryPhotoAlbum
          photos={photos}
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1; // mobile
            if (containerWidth < 1024) return 2; // tablet
            return 3;
          }}
          spacing={10}
          padding={5}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          plugins={[Captions, Download, Zoom, Fullscreen, Thumbnails]}
          captions={{
            showToggles: true,
            descriptionTextAlign: "end",
          }}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={photos}
          index={index}
        />
      </div>
      <Footer />
    </>
  );
}
