import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../data";
import logo from "/imgs/logo.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/%D9%85%D9%88%D8%B3%D8%B3%D9%87-%D8%AE%DB%8C%D8%B1%DB%8C%D9%87-%D9%86%D8%AC%D8%A7%D8%AA%D9%90-%D9%85%D9%87%D8%B1-103345441746593/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
