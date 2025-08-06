import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/landingPage/Main";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
