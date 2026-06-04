import React from "react";
import "./ServicesCard.css";

const ServicesCard = ({ service }) => {
  return (
    <div className="service-card">

      <div className="service-icon-wrapper">
        <div className="service-icon-circle">
          <img
            src={service.icon}
            alt={service.title}
          />
        </div>
      </div>

      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

    </div>
  );
};

export default ServicesCard;