import React from "react";
import MagicStudio4 from "./images/about.jpg";

const AboutSection = () => (
    <>
        <div id="about-section" className="about-section">
        <div class="heading">
        <h1>About Us</h1>
    </div>
    <div class="container">
        <section class="about">
            <div class="about-image">
                <img src={MagicStudio4}/>
            </div>
            <div class="about-content">
                <h2>About Wear n Fit</h2>
                <p>Welcome to Wear n Fit, where style meets substance for the modern man. Our aim is clear: to provide
                    timeless, quality pieces that redefine your wardrobe.

                    From impeccably tailored suits to laid-back essentials, we offer a curated collection that blends
                    sophistication with comfort. Each garment reflects our commitment to detail and excellence, ensuring
                    you always look and feel your best.

                    At Wear n Fit, we're not just about clothes; we're about empowering you to express your unique style
                    with confidence. Join us in embracing authenticity and sophistication – because true style knows no
                    limits.</p>
            </div>
        </section>
    </div>
      </div>
    </>
);

export default AboutSection;