import React from "react";
import Product1 from "./images/Product1.png";
import Product2 from "./images/Product2.png";
import Product3 from "./images/Product3.png";

const ShopSection = () => (
  <>
    <div id="shop-section" className="shop-section">
      <h2 className="shop-heading">Pre-Launched</h2>
      <div className="shop-cards">
        <div class="card">
          <div class="card-img">
            <img src={Product1} alt="" />
          </div>
          <div class="card-info">
            <p class="text-title">White Polo T-Shirt </p>
            <p class="text-body">Product description and details</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4.49</span>
            <div class="card-button">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={Product2} alt="" />
          </div>
          <div class="card-info">
            <p class="text-title"> Aqua Polo T-shirt </p>
            <p class="text-body">Product description and details</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4.49</span>
            <div class="card-button">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src={Product3} alt="" />
          </div>
          <div class="card-info">
            <p class="text-title">Lime Polo T-shirt </p>
            <p class="text-body">Product description and details</p>
          </div>
          <div class="card-footer">
            <span class="text-title">$4.49</span>
            <div class="card-button">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ShopSection;
