import React from "react";
import Logo from "./images/white.png";
import PlayStore from "./images/play-store.png";
import AppStore from "./images/app-store.png";

const Footer = () => (
  <div class="footer">
  <div class="container">
    <div class="row">
      
      <div class="footer-col-2">
        <img src={Logo} alt="" />
        <p>
        "Elevate Your Style: Experience the Essence of Fashion with Wear n Fit Apparel!"
        </p>
      </div>
      <div class="footer-col-3">
        <h3>Useful Links</h3>
        <ul>
          <li>Shop</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div class="footer-col-4">
        <h3>Follow us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>


      <div class="footer-col-1">
        <h3>Download Our App</h3>
        <p>
          Download App for Android <br />
          and ios mobile phone
        </p>
        <div class="app-logo">
          <img src={PlayStore} alt="" />
          <img src={AppStore} alt="" />
        </div>
      </div>
    </div>
    <hr />
    <p class="copyright" id="copyright-text">Copyright 2024 - Wear n Fit</p>
  </div>
</div>
);

export default Footer;