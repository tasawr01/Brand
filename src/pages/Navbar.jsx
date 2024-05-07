import React, { useState, useEffect } from "react";
import Logo from "./images/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showIconMenu, setShowIconMenu] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const handleToggle = () => setShowMenu(!showMenu);
  const handleIconToggle = () => setShowIconMenu(!showIconMenu);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home-section");
      const scrollPosition = window.scrollY;
      const homeSectionOffsetTop = homeSection.offsetTop;
      const homeSectionHeight = homeSection.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate the scroll position relative to the top of the home section
      const scrollRelativeToHome =
        scrollPosition - homeSectionOffsetTop + windowHeight / 2;

      if (scrollRelativeToHome >= 0 && scrollRelativeToHome <= homeSectionHeight / 2) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    const handleLoad = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition === 0) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("DOMContentLoaded", handleLoad);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("DOMContentLoaded", handleLoad);
    };
  }, []);

  return (
    <div className={`navbar ${isTransparent ? "transparent" : "scrolled"}`} id="navbar">
      <div className="logo"><img src={Logo} alt="" /></div>
      <div className={`menu ${showMenu ? "active" : ""}`}>
        <a href="#home-section">Home</a>
        <a href="#shop-section">Pre-Launch</a>
        <a href="#">Gallery</a>
        <a href="#about-section">About</a>
        <a href="#contact-section">Contact</a>
      </div>
      <div className={`menu-icons ${showIconMenu ? "active" : ""}`}>
        <a href="#">
          <i className="fas fa-shopping-cart"></i><span className="icon-text">Cart</span>
        </a>
        <a href="#">
          <i className="fa-regular fa-heart"></i><span className="icon-text">Favourites</span>
        </a>
        <a href="#">
          <i className="fa-regular fa-user"></i><span className="icon-text">Profile</span>
        </a>
      </div>
      <div className="toggle-btn" onClick={handleToggle}>
        &#9776;
      </div>
      <div className="toggle-btn-right" onClick={handleIconToggle}>
        <i class="fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
