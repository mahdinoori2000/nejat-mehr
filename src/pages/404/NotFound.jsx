import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";
import "./notFound.css";

export default function Notfound() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="not-found-section">
        <div className="not-found-container">
          <div className="not-found">
            <h1 className="not-found-num">404</h1>
          </div>
          <p>page not found</p>
          <p className="description">This page is currently not available</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
