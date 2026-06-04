import React from "react";
import "./OurWork.css";
import Title from "../Title/Title";
import assets from "../../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description:
        "We help you execute your plan and deliver results.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <section id="our-work" className="our-work">

      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="work-grid">
        {workData.map((work, index) => (
          <div className="work-card" key={index}>

            <div className="work-image-wrapper">
              <img
                src={work.image}
                alt={work.title}
                className="work-image"
              />
            </div>

            <div className="work-content">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default OurWork;