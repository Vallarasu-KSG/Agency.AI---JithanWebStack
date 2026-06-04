import React from "react";
import "./Services.css";
import assets from "../../assets/assets";
import Title from "../Title/Title";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage and convert.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description:
        "We help you execute your plan and deliver measurable results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We help you create a marketing strategy that drives growth.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We help you build a strong social presence and engage your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    <section id="services" className="services">

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            service={service}
          />
        ))}
      </div>

    </section>
  );
};

export default Services;