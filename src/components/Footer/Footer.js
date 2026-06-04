import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top */}

      <div className="footer-top">

        <div className="footer-left">

          <div className="logo">
            <div className="logo-icon"></div>
            <h2>
              agency<span>.ai</span>
            </h2>
          </div>

          <p className="footer-desc">
            From strategy to execution, we craft digital
            solutions that move your business forward.
          </p>

          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#our-work">Our Work</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>

        </div>

        <div className="footer-right">

          <h3>Subscribe to our newsletter</h3>

          <p>
            The latest news, articles, and resources,
            sent to your inbox weekly.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <hr className="footer-divider" />

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          Copyright 2025 © JithanWebStack -
          All Rights Reserved.
        </p>

        <div className="social-icons">

          <a href="#">
            <img
              src={assets.facebook_icon}
              alt="facebook"
            />
          </a>

          <a href="#">
            <img
              src={assets.twitter_icon}
              alt="twitter"
            />
          </a>

          <a href="#">
            <img
              src={assets.instagram_icon}
              alt="instagram"
            />
          </a>

          <a href="#">
            <img
              src={assets.linkedin_icon}
              alt="linkedin"
            />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;