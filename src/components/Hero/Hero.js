import React from "react";
import "./Hero.css";
import assets from "../../assets/assets";

const Hero = () => {
  return (
    <section id="hero" className="hero">

      <div className="hero-badge">
        <img
          src={assets.group_profile}
          alt="group_profile"
          className="hero-badge-img"
        />
        <p>Trusted by 10k+ people</p>
      </div>

      <h1 className="hero-title">
        Turning imagination into
        {/* <br /> */}
        <span> digital</span> impact.
      </h1>

      <p className="hero-description">
        Creating meaningful connections and turning big ideas into
        interactive digital experiences.
      </p>

      <div className="hero-image-wrapper">
        <img
          src={assets.hero_img}
          alt="hero_img"
          className="hero-image"
        />

        <img
          src={assets.bgImage1}
          alt=""
          className="hero-glow"
        />
      </div>

    </section>
  );
};

export default Hero;