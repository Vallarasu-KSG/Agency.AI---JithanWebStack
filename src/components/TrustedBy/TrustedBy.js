import React from "react";
import "./TrustedBy.css";
import { company_logos } from "../../assets/assets";

const TrustedBy = () => {
  return (
    <section className="trusted-section">

      <div className="trusted-title-wrapper">
        <h3 className="trusted-title">
          Trusted by Leading Companies
        </h3>
      </div>

      <div className="trusted-logos">
        {company_logos.map((logo, index) => (
          <div className="trusted-logo-item" key={index}>
            <img src={logo} alt={`company-${index}`} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default TrustedBy;